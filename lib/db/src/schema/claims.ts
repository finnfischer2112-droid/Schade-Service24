import {
  pgTable,
  text,
  serial,
  timestamp,
  jsonb,
  boolean,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const claimsTable = pgTable("claims", {
  id: serial("id").primaryKey(),
  faultParty: text("fault_party").notNull(), // "other" | "self"
  description: text("description").notNull(),
  photoPaths: jsonb("photo_paths").$type<string[]>().notNull().default([]),
  firstName: text("first_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  postalCode: text("postal_code").notNull(),
  accidentDate: text("accident_date"),
  accidentTime: text("accident_time"),
  accidentLocation: text("accident_location"),
  opponentInfo: text("opponent_info"),
  preferredDate: text("preferred_date"),
  preferredTimeSlot: text("preferred_time_slot"),
  consent: boolean("consent").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertClaimSchema = createInsertSchema(claimsTable).omit({
  id: true,
  createdAt: true,
});
export type InsertClaim = z.infer<typeof insertClaimSchema>;
export type Claim = typeof claimsTable.$inferSelect;
