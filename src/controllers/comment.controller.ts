import { Request, Response } from "express";
import { CommentService } from "../services/comment.service";
import {
  SUCCESS,
  CREATED,
  UPDATED,
  DELETED,
  INTERNAL_SERVER_ERROR
} from "../statuscode/statuscode";

export class CommentController {
  private commentService: CommentService;

  constructor() {
    this.commentService = new CommentService();
  }

  findAll = async (_: Request, res: Response) => {
    const comments = await this.commentService.findAll();
    res.status(SUCCESS).json({
      comments
    });
  };
  findById = async (req: Request, res: Response) => {
    const comment = await this.commentService.findById(req.params.id);
    res.status(SUCCESS).json({
      comment
    });
  };
  save = async (req: Request, res: Response) => {
    console.log(req.body);
    const comment = await this.commentService.add(req.body);
    res.status(CREATED).json({
      commentId: `comment created with ${comment._id} id`
    });
  };
  update = async (req: Request, res: Response) => {
    const comment = await this.commentService.update(req.params.id, req.body);
    res.status(UPDATED).json({
      comment: comment
    });
  };
  delete = async (req: Request, res: Response) => {
    const isDeleted = await this.commentService.delete(req.params.id);
    if (isDeleted)
      res.status(DELETED).json({
        message: `successfully deleted..`
      });
    else
      res.status(INTERNAL_SERVER_ERROR).json({
        message: `oops someting went wrond`
      });
  };
}
