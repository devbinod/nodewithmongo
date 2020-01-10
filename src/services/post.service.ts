import { BaseInterface } from "./common/base.interface";
import { PostModel } from "../models/Posts";
import { IModel } from "../models/model";
import mongoose, { Model } from "mongoose";
import { postSchema } from "../schemas/post.schemas";
import { POST } from "../schemas/schemaConst";
export class PostService implements BaseInterface<PostModel> {
  private post: Model<PostModel>;

  constructor() {
    this.post = postSchema;
  }

  async save(model: PostModel): Promise<PostModel> {
    return await new this.post(model).save();
  }
  async update(_id: string, model: PostModel): Promise<PostModel | null> {
    return await this.post.findByIdAndUpdate(_id, model, { new: true });
  }
  async delete(_id: string): Promise<Boolean> {
    return await this.post
      .deleteOne({ _id })
      .then(res => true)
      .catch(err => false);
  }
  async findById(_id: string): Promise<PostModel | null> {
    return await this.post.findById({ _id });
  }
  async findAll(): Promise<PostModel[]> {
    return await this.post.find();
  }
}
