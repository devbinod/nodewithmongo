import { IModel } from "../models/model";
import mongoose from "mongoose";
import { UserModel } from "../models/user";
import { userSchema } from "../schemas/user.schemas";
import { USER } from "../schemas/schemaConst";

export class LoginService {
  private model: IModel;

  constructor() {
    this.model = Object();
    this.model.user = userSchema;
  }

  findByEmail = async (email: string): Promise<UserModel | null> => {
    return await this.model.user.findOne({ email: email });
  };
}
