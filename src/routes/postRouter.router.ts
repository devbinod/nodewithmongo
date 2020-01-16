import { Application } from "express";
import { PostController } from "../controllers/post.controller";
import { BaseRouter } from "./common/baseRouter.router";

export class PostRouter implements BaseRouter {
  private app: Application;
  private postController: PostController;

  constructor(app: Application) {
    this.app = app;
    this.postController = new PostController();

    this.initRoute();
  }

  initRoute() {
    /**
     * This function comment is parsed by doctrine
     * @route GET /posts
     * @group Post - Operations about user
     * @returns {object} 200 - An array of post info
     * @returns {Error}  default - Unexpected error
     */
    this.app.get("/v1/posts", this.postController.findAll);
 /**
     * This function comment is parsed by doctrine
     * @route GET /posts/{id}
     * @group Post - Operations about Post
     * @param {string} id.path.required
     * @returns {object} 200 - An array of Post info
     * @returns {Error}  default - Unexpected error
     */

    this.app.get("/v1/posts/:id", this.postController.findById)

    /**
     * @typedef Post
     * @property {string} body.required - Some description for Post
     */

    /**
     * @typedef Error
     * @property {string} code.required
     */

    /**
     * This function comment is parsed by doctrine
     * @route POST /posts
     * @group Post - Operations about Post
     * @param {Post.model} Post.body.required - the new point
     * @operationId retrievePostInfo
     * @produces application/json application/xml
     * @consumes application/json application/xml
     * @returns {Response.model} 201 - An array of Post info
     * @returns {Post.model}  default - Unexpected error
     */
    this.app.post("/v1/posts", this.postController.save);

    /**
     * This function comment is parsed by doctrine
     * @route DELETE /posts/{id}
     * @group Post - Operations about Post
     * @param {string} id.path.required
     * @returns {object} 204 - An array of POST info
     * @returns {Error}  default - Unexpected error
     */

    this.app.delete("/v1/posts/:id",this.postController.delete)
   /**
     * This function comment is parsed by doctrine
     * @route PUT /posts/{id}
     * @group Post - Operations about post
     * @param {string} id.path.required
     * @param {POST.model} POST.body.required - the new point
     * @operationId retrievePOSTInfo
     * @produces application/json application/xml
     * @consumes application/json application/xml
     * @returns {Response.model} 201 - An array of user info
     * @returns {POST.model}  default - Unexpected error
     */

    this.app.put("/v1/posts/:id",this.postController.update)
  }
}
