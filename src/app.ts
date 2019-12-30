import express, { Application, Request, Response } from "express";
import {DEFAULT_MESSAGE} from './const/constants'
import {UserController} from './controllers/user.controller'
import {MiddleWare} from './middleware/middleware'
import {DBConfig} from './config/DBConfig'
class App {
   


  public app: Application;
  private userController: UserController
  private middleWare: MiddleWare
  private dbConfig: DBConfig

  constructor() {
    this.app = express();
    this.middleWare = new MiddleWare(this.app)
    this.dbConfig = new DBConfig()
    this.userController = new UserController()
    this.bootstrap();
    this.initRoute();
  }

  bootstrap() {
    this.app.get("/", (req: Request, res: Response) => {

        res.send(DEFAULT_MESSAGE)
    });
  }

  initRoute() {

    this.app.get("/users", this.userController.findAll)
    this.app.get("/users/:id", this.userController.findById)
    this.app.post("/users", this.userController.save)
    this.app.put("/users/:id", this.userController.update)
    this.app.delete("/users/:id",  this.userController.delete)

}
}

export default new App().app;
