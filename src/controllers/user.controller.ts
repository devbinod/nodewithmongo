import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { IModel } from "../models/model";
import e = require("express");
import { IUser } from "../interfaces/user";

export class UserController {
  private model: IModel;
  private userService: UserService;

  constructor() {
    this.model = Object();
    this.userService = new UserService(this.model);
  }

  findAll = async (req: Request, res: Response) => {
    let userList = await this.userService.findAll();
    res.status(200);
    res.json({
      data: userList
    });
  };

  findById = async (req: Request, res: Response) => {
    let user = await this.userService.findById(req.param("id"));
    res.status(200);
    res.json({
      data: user
    });
  };

  save = async (req: Request, res: Response) => {
    const resp = await this.userService.add(req.body);
    res.status(201);
    res.send(resp);
  };

  update = async (req: Request, res: Response) => {
    let user = await this.userService.update(req.param("id"), req.body);
    console.log(`User ${user}`);
    res.send(user);
  };

  delete = async (req: Request, res: Response) => {
    let isDeleted = await this.userService.delete(req.param("id"));
    console.log("dsfsd.........", isDeleted);
    if (isDeleted) {
      res.status(204).send({
        data: [
          {
            message: "Successfully deleted"
          }
        ]
      });
    } else {
      res.status(500).json({
        data: [
          {
            message: "Internal server error"
          }
        ]
      });
    }
  };
}
