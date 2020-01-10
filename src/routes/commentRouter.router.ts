import { BaseRouter } from "./common/baseRouter.router";
import { Application } from "express";
import { CommentController } from "../controllers/comment.controller";

export class CommentRouter implements BaseRouter {
  private app: Application;
  private commentController: CommentController;

  constructor(app: Application) {
    this.app = app;
    this.commentController = new CommentController();
    this.initRoute();
  }

  initRoute(): void {
    this.app.get("/v1/comments", this.commentController.findAll);
    this.app.get("/v1/comments/:id", this.commentController.findById);
    this.app.put("/v1/comments/:id", this.commentController.update);
    this.app.delete("/v1/comments/:id", this.commentController.delete);
    this.app.post("/v1/comments", this.commentController.save);
  }
}
