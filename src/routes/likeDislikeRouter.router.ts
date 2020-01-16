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
    /**
     * This function LikeDislike is parsed by doctrine
     * @route GET /likedislikes
     * @group LikeDislike - Operations about LikeDislike
     * @returns {object} 200 - An array of LikeDislike info
     * @returns {Error}  default - Unexpected error
     */
    this.app.get("/v1/likedislikes", this.likeDislikeController.findAll);
    /**
     * This function LikeDislike is parsed by doctrine
     * @route GET /likedislikes/{id}
     * @group LikeDislike - Operations about LikeDislike
     * @param {string} id.path.required
     * @returns {object} 200 - An single of LikeDislike info
     * @returns {Error}  default - Unexpected error
     */
    this.app.get("/v1/likedislikes/:id", this.likeDislikeController.findById);

    /**
     * This function comment is parsed by doctrine
     * @route PUT /likedislikes/{id}
     * @group LikeDislike - Operations about Comment
     * @param {string} id.path.required
     * @param {LikeDislike.model} LikeDislike.body.required - the new point
     * @operationId retrieveLikeDislikeInfo
     * @produces application/json application/xml
     * @consumes application/json application/xml
     * @returns {Response.model} 201 - An array of LikeDislike info
     * @returns {LikeDislike.model}  default - Unexpected error
     */
    this.app.put("/v1/likedislikes/:id", this.likeDislikeController.update);
    /**
     * This function LikeDislike is parsed by doctrine
     * @route DELETE /likedislikes/{id}
     * @group LikeDislike - Operations about LikeDislike
     * @param {string} id.path.required
     * @returns {object} 204 - An array of LikeDislike info
     * @returns {Error}  default - Unexpected error
     */
    this.app.delete("/v1/likedislikes/:id", this.likeDislikeController.delete);

    /**
     * @typedef LikeDislike
     * @property {integer} id
     * @property {string} postId.required - Some description for LikeDislike
     * @property {boolean} isLike. - Some description for LikeDislike
     * @property {boolean} isDislike - Some description for LikeDislike
     */

    /**
     * @typedef Error
     * @property {string} code.required
     */

    /**
     * @typedef Response
     * @property {[integer]} code
     */

    /**
     * This function comment is parsed by doctrine
     * @route POST /likedislikes
     * @group LikeDislike - Operations about user
     * @param {LikeDislike.model} LikeDislike.body.required - the new point
     * @operationId retrieveUserInfo
     * @produces application/json application/xml
     * @consumes application/json application/xml
     * @returns {Response.model} 201 - An array of LikeDislike info
     * @returns {LikeDislike.model}  default - Unexpected error
     */
    this.app.post("/v1/likedislikes", this.likeDislikeController.save);
  }
}
