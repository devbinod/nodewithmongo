import { IModel } from "../models/model";
import { LoginService } from "../services/login.service";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import {
  loginValidation,
  registerValidation
} from "../validation/user.validation";
import jwt from "jsonwebtoken";
import {
  INTERNAL_SERVER_ERROR,
  ALREADY_EXISTS,
  CREATED,
  NOT_FOUND,
  SUCCESS,
  TOKEN_SECRET
} from "../statuscode/statuscode";
import { UserService } from "../services/user.service";
import { UserModel } from "../models/user";

export class LoginController {
  private loginService: LoginService;
  private userService: UserService;

  constructor() {
    this.loginService = new LoginService();
    this.userService = new UserService();
  }

  register = async (req: Request, res: Response) => {
    const { error } = registerValidation(req);
    if (error) {
      return res
        .status(INTERNAL_SERVER_ERROR)
        .json({ error: error.details[0].message });
    }
    let emailExist = await this.loginService.findByEmail(req.body.email);
    if (emailExist) {
      return res.status(ALREADY_EXISTS).json({
        message: "Email Already exists"
      });
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const userModel: UserModel = req.body;
    userModel.password = hashPassword;
    const user = await this.userService.add(req.body);
    return res.status(CREATED).json({
      user: user._id
    });
  };

  login = async (req: Request, res: Response) => {
    const { error } = loginValidation(req);
    if (error) {
      res.status(INTERNAL_SERVER_ERROR).json({
        error: error.details[0].message
      });
    }

    let user = await this.loginService.findByEmail(req.body.email);
    if (!user)
      res.status(NOT_FOUND).json({
        message: "Email or password doesn't exits"
      });

    // password check

    const validPassword = await bcrypt.compare(
      req.body.password,
      user?.password as string
    );
    if (!validPassword)
      return res.status(ALREADY_EXISTS).json({
        message: "Invalid password"
      });

    const token = jwt.sign(
      { _id: user?._id, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
      TOKEN_SECRET
    );
    res
      .header("x-header-token", token)
      .status(SUCCESS)
      .json({
        message: "Successfully loggedin",
        token: token
      });
  };
}
