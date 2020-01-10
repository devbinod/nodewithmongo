import mangoose, { Model } from "mongoose";
import { BaseInterface } from "./common/base.interface";
import { IModel } from "../models/model";
import { commentSchema } from "../schemas/comment.schemas";
import { CommentModel } from "../models/comment";
export class CommentService implements BaseInterface<CommentModel> {
  private comment: Model<CommentModel>;
  constructor() {
    this.comment = commentSchema;
  }

  async save(model: CommentModel): Promise<CommentModel> {
    return new this.comment(model).save();
  }
  async update(_id: string, model: CommentModel): Promise<CommentModel | null> {
    return await this.comment.findByIdAndUpdate(_id, model, {
      new: true
    });
  }
  async delete(_id: string): Promise<Boolean> {
    return await this.comment
      .deleteOne({ _id })
      .then(e => true)
      .catch(e => false);
  }
  async findById(_id: string): Promise<CommentModel | null> {
    return await this.comment.findById({ _id });
  }
  async findAll(): Promise<CommentModel[]> {
    return await this.comment.find();
  }
}
