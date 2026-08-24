import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import { existsSync } from "node:fs";
import path from "node:path";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

// Render sits behind a single trusted proxy. This lets rate limiting use the
// real client IP without trusting arbitrary forwarded headers from the internet.
app.set("trust proxy", 1);

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

const webDistDir = path.resolve(
  __dirname,
  "../../landingpage/dist/public",
);
const webIndexPath = path.join(webDistDir, "index.html");

if (existsSync(webIndexPath)) {
  app.use(express.static(webDistDir));
  app.use((req, res, next) => {
    if (
      req.method !== "GET" ||
      req.path.startsWith("/api") ||
      !req.accepts("html")
    ) {
      next();
      return;
    }

    res.sendFile(webIndexPath);
  });
} else {
  logger.warn(
    { webDistDir },
    "Landing page build not found; API routes remain available",
  );
}

export default app;
