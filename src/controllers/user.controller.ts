import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { IModel } from "../models/model";
import joi from "joi";
import {
  SUCCESS,
  DELETED,
  UPDATED,
  CREATED,
  INTERNAL_SERVER_ERROR
} from "../statuscode/statuscode";
import { registerValidation } from "../validation/user.validation";
export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  findAll = async (_: Request, res: Response) => {
    let userList = await this.userService.findAll();
    res.status(SUCCESS);
    res.json({
      data: userList
    });
  };

  findById = async (req: Request, res: Response) => {
    let user = await this.userService.findById(req.params.id);
    res.status(SUCCESS);
    res.json({
      data: user
    });
  };

  save = async (req: Request, res: Response) => {
    const { error } = registerValidation(req.body);

    if (error) {
      return res
        .status(INTERNAL_SERVER_ERROR)
        .send({ error: error.details[0].message });
    } else {
      const resp = await this.userService.add(req.body);
      res.status(CREATED);
      res.send(resp);
    }
  };

  update = async (req: Request, res: Response) => {
    let user = await this.userService.update(req.param("id"), req.body);
    res.status(UPDATED).send(user);
  };

  delete = async (req: Request, res: Response) => {
    let isDeleted = await this.userService.delete(req.param("id"));
    if (isDeleted) {
      res.status(DELETED).send({
        data: [
          {
            message: "Successfully deleted"
          }
        ]
      });
    } else {
      res.status(INTERNAL_SERVER_ERROR).json({
        data: [
          {
            message: "Internal server error"
          }
        ]
      });
    }
  };
}
