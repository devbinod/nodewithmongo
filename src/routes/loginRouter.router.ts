import { Application } from "express";
import { LoginController } from "../controllers/login.controller";

export class LoginRouter {
  private app: Application;
  private loginController: LoginController;

  constructor($app: Application) {
    this.app = $app;

    this.loginController = new LoginController();
    this.route();
  }

  route() {
    this.app.post("/v1/register", this.loginController.register);
    this.app.post("/v1/login", this.loginController.login);
  }
}
