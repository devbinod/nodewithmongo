import joi from "joi";
import { Request } from "express";

export const registerValidation = (req: Request) => {
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
      .required()
  };

  return joi.validate(req.body, userSchema);
};

export const loginValidation = (req: Request) => {
  const loginSchema = {
    email: joi.string().required(),
    password: joi
      .string()
      .min(3)
      .required()
  };

  return joi.validate(req.body, loginSchema);
};
