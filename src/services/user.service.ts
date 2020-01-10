import { UserModel } from "../models/user";
import { userSchema } from "../schemas/user.schemas";
import { IModel } from "../models/model";
import { BaseInterface } from "./common/base.interface";
export class UserService implements BaseInterface<UserModel> {
  private model: IModel;

  constructor() {
    this.model = Object();
    this.model.user = userSchema;
  }

  async delete(_id: string): Promise<Boolean> {
    return await this.model.user
      .deleteOne({
        _id
      })
      .then(() => true)
      .catch(() => false);
  }
  async save(t: UserModel): Promise<UserModel> {
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
}
