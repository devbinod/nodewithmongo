import mongoose, { Schema } from "mongoose";
import { USER } from "./schemaConst";
import { UserModel } from "../models/user";

const schema: Schema = new Schema(
  {
    id: Object,
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);
export const userSchema = mongoose.model<UserModel>(`${USER}`, schema);
