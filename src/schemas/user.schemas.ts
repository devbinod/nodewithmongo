import mongoose, { Schema } from "mongoose";

export let userSchema: Schema = new Schema(
  {
    id: Object,
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);
mongoose.model("User", userSchema);
