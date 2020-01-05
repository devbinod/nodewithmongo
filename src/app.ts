import express, { Application, Request, Response } from "express";
import { DEFAULT_MESSAGE } from "./config/constants";
import { UserController } from "./controllers/user.controller";
import { MiddleWare } from "./middleware/middleware";
import { DBConfig } from "./config/DBConfig";
import { UserRoute } from "./routes/baseRouter.router";
import { PostRouter } from "./routes/postRouter.router";
import { PostController } from "./controllers/post.controller";
class App {
  public app: Application;
  private userController: UserController;
  private middleWare: MiddleWare;
  private dbConfig: DBConfig;
  private userRouter: UserRoute;
  private postRouter: PostRouter;
  private postController: PostController;

  constructor() {
    this.app = express();
    this.middleWare = new MiddleWare(this.app);
    this.dbConfig = new DBConfig();
    this.userController = new UserController();
    this.postController = new PostController();
    this.userRouter = new UserRoute(this.app, this.userController);
    this.postRouter = new PostRouter(this.app, this.postController);
    this.bootstrap();
  }

  bootstrap() {
    this.app.get("/", (req: Request, res: Response) => {
      res.send(DEFAULT_MESSAGE);
    });
  }
}

export default new App().app;
