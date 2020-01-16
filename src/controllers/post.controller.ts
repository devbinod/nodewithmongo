import { Request, Response } from "express";
import { IModel } from "../models/model";
import { PostService } from "../services/post.service";
import { SUCCESS, CREATED, UPDATED, DELETED } from "../statuscode/statuscode";

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

  findById = async(req:Request, res:Response) => {
    const post = await this.postService.findById(req.param('id'))
    res.status(SUCCESS).json(post)
  }

  update = async(req:Request, res: Response) => {
    const post = await this.postService.update(req.param('id'), req.body)
    res.status(UPDATED).send('sucessfully updated')
  }

  delete = async(req:Request, res:Response) => {
    const isDeleted = await this.postService.delete(req.param('id'))
    res.status(DELETED).send('successfully deleted...')
  }
}
