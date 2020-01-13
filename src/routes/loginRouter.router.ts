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

    /**
     * @typedef Login
     * @property {string} email.required - Some description for Login
     * @property {string} password.required - Some description for Login
     */

    /**
     * @typedef Error
     * @property {string} code.required
     */

    /**
     * This function comment is parsed by doctrine
     * @route POST /login
     * @group Login - Operations about user
     * @param {Login.model} Post.body.required - the new point
     * @operationId retrieveUserInfo
     * @produces application/json application/xml
     * @consumes application/json application/xml
     * @returns {Response.model} 201 - An array of user info
     * @returns {Login.model}  default - Unexpected error
     */

    this.app.post("/v1/login", this.loginController.login);
  }
}
