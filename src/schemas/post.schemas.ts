import mongoosh, { Schema } from "mongoose";

export const postSchema = new Schema(
  {
    id: Object,
    body: String,
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    commentCount: Number,
    likeCount: Number,
    userImage: String
  },
  { timestamps: true }
);

mongoosh.model("posts", postSchema);
