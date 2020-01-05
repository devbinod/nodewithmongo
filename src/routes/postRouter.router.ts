import { Application } from "express";
import { PostController } from "../controllers/post.controller";

export class PostRouter {
  private app: Application;
  private postController: PostController;

  constructor(app: Application, postController: PostController) {
    this.app = app;
    this.postController = new PostController();

    this.route();
  }

  route() {
    this.app.get("/v1/posts", this.postController.findAll);
    this.app.post("/v1/posts", this.postController.save);
  }
}
