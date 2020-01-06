import { Application } from "express";
import { PostController } from "../controllers/post.controller";
import { BaseRouter } from "./baseRouter.router";

export class PostRouter implements BaseRouter {
  private app: Application;
  private postController: PostController;

  constructor(app: Application) {
    this.app = app;
    this.postController = new PostController();

    this.initRoute();
  }

  initRoute() {
    this.app.get("/v1/posts", this.postController.findAll);
    this.app.post("/v1/posts", this.postController.save);
  }
}
