import mongoose, { Schema, Types } from "mongoose";
import { POST, USER, LIKE_DISLIKE } from "./schemaConst";
import { LikeDislikeModel } from "../models/likeDislike";

const schema: Schema = new Schema(
  {
    isLike: {
      type: Boolean,
      default: false
    },
    isDislike: {
      type: Boolean,
      default: false
    },
    postId: { type: Schema.Types.ObjectId, ref: `${POST}` },
    userId: { type: Schema.Types.ObjectId, ref: `${USER}` }
  },
  { timestamps: true }
);

export const likeDislikeSchema = mongoose.model<LikeDislikeModel>(
  `${LIKE_DISLIKE}`,
  schema
);
