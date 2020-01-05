import { Model } from "mongoose";
import { UserModel } from "./user";
import { PostModel } from "./Posts";
export interface IModel {
  user: Model<UserModel>;
  post: Model<PostModel>;
}
