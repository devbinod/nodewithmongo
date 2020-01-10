import { Application } from "express";
import { LoginController } from "../controllers/login.controller";
import { BaseRouter } from "./common/baseRouter.router";

export class LoginRouter implements BaseRouter {
  private app: Application;
  private loginController: LoginController;

  constructor(app: Application) {
    this.app = app;

    this.loginController = new LoginController();
    this.initRoute();
  }

  initRoute(): void {
    this.app.post("/v1/register", this.loginController.register);
    this.app.post("/v1/login", this.loginController.login);
  }
}
