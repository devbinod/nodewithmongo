import { Model } from "mongoose";
import { UserModel } from "./user";
import { PostModel } from "./Posts";
import { CommentModel } from "../models/comment";
import { LikeDislikeModel } from "./likeDislike";

export interface IModel {
  user: Model<UserModel>;
  post: Model<PostModel>;
  comment: Model<CommentModel>;
  likeDislike: Model<LikeDislikeModel>;
}
