import { Document } from "mongoose";

export interface LikeDislikeModel extends Document {
  _id: string;
  isLike: boolean;
  isDislike: boolean;
  postId: string;
  userId: string;
}
