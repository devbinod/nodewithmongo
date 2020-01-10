import joi from "joi";
import { Request } from "express";
import { UserModel } from "../models/user";

export const registerValidation = (user: UserModel) => {
  const userSchema = {
    firstName: joi
      .string()
      .min(3)
      .required(),
    lastName: joi
      .string()
      .min(3)
      .required(),
    email: joi.string().required(),
    password: joi
      .string()
      .min(3)
      .required(),
    userImageUrl: joi.string().required()
  };

  return joi.validate(user, userSchema);
};

export const loginValidation = (user: UserModel) => {
  const loginSchema = {
    email: joi.string().required(),
    password: joi
      .string()
      .min(3)
      .required()
  };

  return joi.validate(user, loginSchema);
};
