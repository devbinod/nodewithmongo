import mongoosh, { Schema } from "mongoose";
import { POST, USER } from "./schemaConst";
import { PostModel } from "../models/Posts";

const schema: Schema = new Schema(
  {
    id: Object,
    body: String,
    userId: { type: Schema.Types.ObjectId, ref: `${USER}` },
    commentCount: Number,
    likeCount: Number,
    userImage: String
  },
  { timestamps: true }
);

export const postSchema = mongoosh.model<PostModel>(`${POST}`, schema);
