import { Request, Response } from "express";
import mongoose, { MongooseDocument } from "mongoose";
import { UserModel } from "../models/user";
import { userSchema } from "../schemas/user.schemas";
import { IModel } from "../models/model";
import { BaseInterface } from "./common/base.interface";
export class UserService implements BaseInterface<UserModel> {
  async delete(_id: string): Promise<Boolean> {
    return await this.model.user
      .deleteOne({
        _id
      })
      .then(() => true)
      .catch(() => false);
  }
  async add(t: UserModel): Promise<UserModel> {
    return await new this.model.user(t).save();
  }
  async update(id: string, t: UserModel): Promise<UserModel | null> {
    return await this.model.user.findByIdAndUpdate(id, t, {
      new: true
    });
  }

  async findById(id: string): Promise<UserModel | null> {
    return await this.model.user.findById(id);
  }
  async findAll(): Promise<UserModel[]> {
    return await this.model.user.find();
  }

  private model: IModel;

  constructor($model: IModel) {
    this.model = $model;
    this.model.user = mongoose.model<UserModel>("user", userSchema);
  }
}
