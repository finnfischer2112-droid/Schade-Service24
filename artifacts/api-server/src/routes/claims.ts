import { Router, type IRouter } from "express";
import rateLimit from "express-rate-limit";
import { db, claimsTable } from "@workspace/db";
import { CreateClaimBody, CreateClaimResponse } from "@workspace/api-zod";
import {
  ObjectNotFoundError,
  ObjectStorageService,
} from "../lib/objectStorage";

const router: IRouter = Router();
const objectStorageService = new ObjectStorageService();

const OBJECT_PATH_PATTERN = /^\/objects\/uploads\/[A-Za-z0-9-]+$/;
const MAX_PHOTO_BYTES = 10 * 1024 * 1024;

const claimLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." },
});

router.post("/claims", claimLimiter, async (req, res): Promise<void> => {
  const parsed = CreateClaimBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.message }, "Invalid claim body");
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  try {
    // Verify each referenced photo when Object Storage is available.
    // If storage is unavailable (e.g. non-Replit environments), skip
    // verification and save the claim without photo paths.
    const verifiedPhotoPaths: string[] = [];
    for (const objectPath of parsed.data.photoPaths) {
      if (!OBJECT_PATH_PATTERN.test(objectPath)) {
        continue; // skip invalid paths silently
      }
      try {
        const file = await objectStorageService.getObjectEntityFile(objectPath);
        const [metadata] = await file.getMetadata();
        const contentType = String(metadata.contentType ?? "");
        const size = Number(metadata.size ?? 0);
        if (/^image\//i.test(contentType) && size <= MAX_PHOTO_BYTES) {
          verifiedPhotoPaths.push(objectPath);
        }
      } catch (err) {
        if (err instanceof ObjectNotFoundError) {
          continue; // photo no longer exists, skip
        }
        // Storage unavailable — skip all photo verification, proceed without photos
        req.log.warn({ err }, "Object storage unavailable, skipping photo verification");
        break;
      }
    }

    const [claim] = await db
      .insert(claimsTable)
      .values({ ...parsed.data, photoPaths: verifiedPhotoPaths })
      .returning();

    req.log.info({ claimId: claim.id }, "New damage claim submitted");

    res.status(201).json(CreateClaimResponse.parse(claim));
  } catch (error) {
    req.log.error({ err: error }, "Failed to create claim");
    res.status(500).json({
      error: "Die Schadenmeldung konnte nicht gespeichert werden.",
    });
  }
});

export default router;
