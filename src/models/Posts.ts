import { Document } from "mongoose";

export interface PostModel extends Document {
  body: string;
  userId: string;
  commentCount?: number;
  likeCount?: number;
  userImage?: string;
}
