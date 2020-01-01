import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { IModel } from "../models/model";

export class UserController {
  private model: IModel;
  private userService: UserService;

  constructor() {
    this.model = Object();
    this.userService = new UserService(this.model);
  }

  findAll = (req: Request, res: Response) => {
    res.send("inside all");
  };

  findById = (req: Request, res: Response) => {
    res.send("inside findOne");
  };

  save = async (req: Request, res: Response) => {
    const resp = await this.userService.save(req.body);
    res.send(resp);
  };

  update = (req: Request, res: Response) => {
    res.send("inside update");
  };

  delete = (req: Request, res: Response) => {
    res.send("inside delete ");
  };
}
