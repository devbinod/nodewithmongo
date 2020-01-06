import { IModel } from "../models/model";
import { LoginService } from "../services/login.service";
import { Request, Response } from "express";
import {
  loginValidation,
  registerValidation
} from "../validation/user.validation";
import {
  INTERNAL_SERVER_ERROR,
  ALREADY_EXISTS,
  CREATED
} from "../statuscode/statuscode";
import { UserService } from "../services/user.service";

export class LoginController {
  private model: IModel;
  private loginService: LoginService;
  private userService: UserService;

  constructor() {
    this.model = Object();
    this.loginService = new LoginService(this.model);
    this.userService = new UserService(this.model);
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

    const user = await this.userService.add(req.body);
    return res.status(CREATED).json({
      user: user
    });
  };
}
