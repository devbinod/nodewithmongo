import { Document } from "mongoose";
export interface UserModel extends Document {
  firstName: string;
  lastName: string;
  email?: string;
}
