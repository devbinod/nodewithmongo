import { Request, Response } from "express";
import { LikeDislikeService } from "../services/likeDislike.service";
import {
  SUCCESS,
  CREATED,
  UPDATED,
  DELETED,
  INTERNAL_SERVER_ERROR
} from "../statuscode/statuscode";

export class LikeDislikeController {
  private likeDislikeService: LikeDislikeService;
  constructor() {
    this.likeDislikeService = new LikeDislikeService();
  }

  findAll = async (_: Request, res: Response) => {
    const likeDislikeList = await this.likeDislikeService.findAll();
    res.status(SUCCESS).json(likeDislikeList);
  };

  findById = async (req: Request, res: Response) => {
    const likeDislike = await this.likeDislikeService.findById(req.params.id);
    res.status(SUCCESS).json(likeDislike);
  };

  save = async (req: Request, res: Response) => {
    const likeDislike = await this.likeDislikeService.save(req.body);
    res.status(CREATED).json(`new likedislike created with ${likeDislike._id}`);
  };

  update = async (req: Request, res: Response) => {
    const likeDislike = await this.likeDislikeService.update(
      req.params.id,
      req.body
    );
    res.status(UPDATED).json(likeDislike);
  };

  delete = async (req: Request, res: Response) => {
    const isDeleted = await this.likeDislikeService.delete(req.params.id);
    if (isDeleted) res.status(DELETED).json(`sucessfully deleted.`);
    else res.status(INTERNAL_SERVER_ERROR).json(`something went wrong`);
  };
}
