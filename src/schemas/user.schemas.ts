import { Schema } from "mongoose";

export let userSchema: Schema  = new Schema ( {

    firstName: String,
    lastName: String,
    email: String
});