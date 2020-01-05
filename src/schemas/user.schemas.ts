import mongoose, { Schema } from "mongoose";

export let userSchema: Schema = new Schema(
  {
    id: Object,
    firstName: String,
    lastName: String,
    email: String,
    password: String
  },
  { timestamps: true }
);
mongoose.model("User", userSchema);
