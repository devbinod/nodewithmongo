import { Document } from "mongoose";

export interface PostModel extends Document {
  body: string;
  user: string;
  commentCount?: number;
  likeCount?: number;
  userImage?: string;
}
