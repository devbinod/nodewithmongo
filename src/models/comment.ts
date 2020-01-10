import { Document } from "mongoose";

export interface CommentModel extends Document {
  _id: string;
  postId: string;
  userId: string;
  comment: string;
  isLike: boolean;
}
