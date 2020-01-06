import express, { Application, Request, Response, Router } from "express";
import { DEFAULT_MESSAGE } from "./config/constants";
import { MiddleWare } from "./middleware/middleware";
import { DBConfig } from "./config/DBConfig";
import { UserRoute } from "./routes/userRouter.router";
import { PostRouter } from "./routes/postRouter.router";
import { LoginRouter } from "./routes/loginRouter.router";
import { JWTMiddleWare } from "./middleware/jwt.middleware";
class App {
  public app: Application;

  private router: Router;

  constructor() {
    this.app = express();
    this.router = express.Router();
    this.bootstrap();
  }

  bootstrap() {
    this.app.get("/", (req: Request, res: Response, next) => {
      res.send(DEFAULT_MESSAGE);
    });
  }
}

export default new App().app;
