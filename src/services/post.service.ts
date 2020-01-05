import { BaseInterface } from "./common/base.interface";
import { PostModel } from "../models/Posts";
import { IModel } from "../models/model";
import mongoose from "mongoose";
import { postSchema } from "../schemas/post.schemas";
export class PostService implements BaseInterface<PostModel> {
  private model: IModel;

  constructor(model: IModel) {
    this.model = model;
    this.model.post = mongoose.model<PostModel>("posts", postSchema);
  }

  async add(t: PostModel): Promise<PostModel> {
    return await new this.model.post(t).save();
  }
  update(id: string, t: PostModel): Promise<PostModel | null> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<PostModel | null> {
    throw new Error("Method not implemented.");
  }
  async findAll(): Promise<PostModel[]> {
    return await this.model.post.find();
  }
}