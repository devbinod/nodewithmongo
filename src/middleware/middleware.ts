import { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {
  TOKEN_SECRET,
  ALREADY_EXISTS,
  TOKEN_INVALID
} from "../statuscode/statuscode";

export class MiddleWare {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
  }
}
