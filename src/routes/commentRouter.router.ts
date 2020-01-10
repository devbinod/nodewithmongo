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
    /**
     * This function comment is parsed by doctrine
     * @route GET /comments
     * @group Comment - Operations about comment
     * @returns {object} 200 - An array of user info
     * @returns {Error}  default - Unexpected error
     */
    this.app.get("/v1/comments", this.commentController.findAll);
    /**
     * This function comment is parsed by doctrine
     * @route GET /comments/{id}
     * @group Comment - Operations about comment
     * @param {string} id.path.required
     * @returns {object} 200 - An single of comment info
     * @returns {Error}  default - Unexpected error
     */
    this.app.get("/v1/comments/:id", this.commentController.findById);
    /**
     * This function comment is parsed by doctrine
     * @route PUT /comments/{id}
     * @group Comment - Operations about Comment
     * @param {string} id.path.required
     * @param {Comment.model} Comment.body.required - the new point
     * @operationId retrieveCommentInfo
     * @produces application/json application/xml
     * @consumes application/json application/xml
     * @returns {Response.model} 201 - An array of Comment info
     * @returns {Comment.model}  default - Unexpected error
     */

    this.app.put("/v1/comments/:id", this.commentController.update);

    /**
     * This function comment is parsed by doctrine
     * @route DELETE /comments/{id}
     * @group Comment - Operations about comment
     * @param {string} id.path.required
     * @returns {object} 204 - An array of comment info
     * @returns {Error}  default - Unexpected error
     */
    this.app.delete("/v1/comments/:id", this.commentController.delete);

    /**
     * @typedef Comment
     * @property {integer} id
     * @property {string} comment.required - Some description for Comment
     * @property {string} postId.required - Some description for Comment
     * @property {boolean} isLike. - Some description for Comment
     * @property {boolean} isDislike - Some description for Comment
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
     * @route POST /comments
     * @group Comment - Operations about user
     * @param {Comment.model} comment.body.required - the new point
     * @operationId retrieveUserInfo
     * @produces application/json application/xml
     * @consumes application/json application/xml
     * @returns {Response.model} 201 - An array of Comment info
     * @returns {Comment.model}  default - Unexpected error
     */
    this.app.post("/v1/comments", this.commentController.save);
  }
}
