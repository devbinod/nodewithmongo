import { UserModel } from "../models/user";
import { userSchema } from "../schemas/user.schemas";
import { IModel } from "../models/model";
import { BaseInterface } from "./common/base.interface";
import { Model } from "mongoose";
export class UserService implements BaseInterface<UserModel> {
  private user: Model<UserModel>;

  constructor() {
    this.user = userSchema;
  }

  async delete(_id: string): Promise<Boolean> {
    return await this.user
      .deleteOne({
        _id
      })
      .then(() => true)
      .catch(() => false);
  }
  async save(model: UserModel): Promise<UserModel> {
    return await new this.user(model).save();
  }
  async update(id: string, model: UserModel): Promise<UserModel | null> {
    return await this.user.findByIdAndUpdate(id, model, {
      new: true
    });
  }

  async findById(id: string): Promise<UserModel | null> {
    return await this.user.findById(id);
  }
  async findAll(): Promise<UserModel[]> {
    return await this.user.find();
  }
}
