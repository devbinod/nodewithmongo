import { BaseInterface } from "./common/base.interface";
import { LikeDislikeModel } from "../models/likeDislike";
import { IModel } from "../models/model";
import { likeDislikeSchema } from "../schemas/likedislike.schemas";
import { Schema, Model } from "mongoose";

export class LikeDislikeService implements BaseInterface<LikeDislikeModel> {
  private likeDislike: Model<LikeDislikeModel>;

  constructor() {
    this.likeDislike = likeDislikeSchema;
  }

  async save(model: LikeDislikeModel): Promise<LikeDislikeModel> {
    console.log(model);
    console.log("called service");
    return await new this.likeDislike(model).save();
  }
  async update(
    _id: string,
    model: LikeDislikeModel
  ): Promise<LikeDislikeModel | null> {
    return await this.likeDislike.findByIdAndUpdate(_id, model, { new: true });
  }

  async delete(_id: string): Promise<Boolean> {
    return await this.likeDislike
      .deleteOne(_id)
      .then(res => true)
      .catch(err => false);
  }
  async findById(_id: string): Promise<LikeDislikeModel | null> {
    return await this.likeDislike.findById({ _id });
  }
  async findAll(): Promise<LikeDislikeModel[]> {
    return await this.likeDislike.find();
  }
}
