import { Request, Response } from "express";
import { IModel } from "../models/model";
import { PostService } from "../services/post.service";
import { SUCCESS, CREATED } from "../statuscode/statuscode";

export class PostController {
  private postService: PostService;

  constructor() {
    this.postService = new PostService();
  }

  findAll = async (_: Request, res: Response) => {
    const postList = await this.postService.findAll();
    return await res.status(SUCCESS).json({
      data: postList
    });
  };

  save = async (req: Request, res: Response) => {
    const resp = await this.postService.save(req.body);
    res.status(CREATED);
    res.send(resp);
  };
}
