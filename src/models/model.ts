import { Model } from "mongoose";
import { UserModel } from "./user";
import { PostModel } from "./Posts";
import { CommentModel } from "../models/comment";

export interface IModel {
  user: Model<UserModel>;
  post: Model<PostModel>;
  comment: Model<CommentModel>;
}
