import { Schema, model } from "mongoose";
import { UserSchema } from "./User.model";

export const allowType = ["jobstreet_express", "jobstreet", "kupu"];

export const ScrapingAccountSchema = new Schema({
  type: { type: String, enum: allowType },
  name: { type: String },
  email: { type: String },
  phone: { type: String, default: null },
  password: { type: String },
  cookies: { type: String, default: null },
  created_by: { type: UserSchema },
});

export const ScrapingAccount = model<any>(
  "scraping_account",
  ScrapingAccountSchema
);
