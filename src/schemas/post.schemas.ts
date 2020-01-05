import mongoosh, { Schema } from "mongoose";

export const postSchema = new Schema(
  {
    id: Object,
    body: String,
    user: Object,
    commentCount: Number,
    likeCount: Number,
    userImage: String
  },
  { timestamps: true }
);

mongoosh.model("posts", postSchema);
