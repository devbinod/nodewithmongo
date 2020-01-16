import app from "./app";
const expressSwagger = require("express-swagger-generator")(app);

import { PORT } from "./config/constants";
import "dotenv/config";
import { Request, Response } from "express";
import { UserRoute } from "./routes/userRouter.router";
import { PostRouter } from "./routes/postRouter.router";
import { LoginRouter } from "./routes/loginRouter.router";
import { JWTMiddleWare } from "./middleware/jwt.middleware";
import { MiddleWare } from "./middleware/middleware";
import { DBConfig } from "./config/DBConfig";
import { CommentRouter } from "./routes/commentRouter.router";
import { LikeDislikeRouter } from "./routes/likeDislikeRouter.router";

let options = {
  swaggerDefinition: {
    info: {
      description: "social Media App",
      title: "Social Media App",
      version: "1.0.0"
    },
    host: "localhost:5000",
    basePath: "/v1",
    produces: ["application/json", "application/xml"],
    schemes: ["http", "https"],
    securityDefinitions: {
      JWT: {
        type: "apiKey",
        in: "header",
        name: "Authorization",
        description: ""
      },
      value: "Bearer <JWT>"
    }
  },
  basedir: __dirname, //app absolute path
  files: ["../src/routes/*.*.ts"] //Path to the API handle folder
};
expressSwagger(options);
let initializeRoute = (_: Request, __: Response, next: any) => {
  new UserRoute(app);
  new PostRouter(app);
  new CommentRouter(app);
  new LikeDislikeRouter(app);
  next();
};

let initializeMiddleWare = (_: Request, __: Response, next: any) => {
  new MiddleWare(app);
  new LoginRouter(app);
  // new JWTMiddleWare(app);
  new DBConfig();
  next();
};
app.use(initializeMiddleWare);
app.use(initializeRoute);

app.listen(process.env.PORT, () => {
  console.log(`Application is running on  ${process.env.PORT}`);
});
