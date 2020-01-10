import mongoose, { Schema } from "mongoose";
import { USER, POST, COMMENT } from "./schemaConst";
import { UserModel } from "../models/user";
import { CommentModel } from "../models/comment";

const schema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: `${USER}` },
    postId: { type: Schema.Types.ObjectId, ref: `${POST}` },
    comment: String,
    isLike: Boolean,
    isDislike: Boolean
  },
  { timestamps: true }
);

export const commentSchema = mongoose.model<CommentModel>(`${COMMENT}`, schema);
