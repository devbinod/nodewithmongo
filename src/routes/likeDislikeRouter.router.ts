import { BaseRouter } from "./common/baseRouter.router";
import { Application } from "express";
import { LikeDislikeController } from "../controllers/likeDislike.controller";

export class LikeDislikeRouter implements BaseRouter {
  private likeDislikeController: LikeDislikeController;
  private app: Application;

  constructor(app: Application) {
    this.app = app;
    this.likeDislikeController = new LikeDislikeController();
    this.initRoute();
  }

  initRoute(): void {
    this.app.get("/v1/likedislikes", this.likeDislikeController.findAll);
    this.app.get("/v1/likedislikes/:id", this.likeDislikeController.findById);
    this.app.put("/v1/likedislikes/:id", this.likeDislikeController.update);
    this.app.delete("/v1/likedislikes/:id", this.likeDislikeController.delete);
    this.app.post("/v1/likedislikes", this.likeDislikeController.findAll);
  }
}
