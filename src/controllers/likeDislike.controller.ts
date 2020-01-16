import { Request, Response } from "express";
import { LikeDislikeService } from "../services/likeDislike.service";
import {
  SUCCESS,
  CREATED,
  UPDATED,
  DELETED,
  INTERNAL_SERVER_ERROR
} from "../statuscode/statuscode";
import { LikeDislikeModel } from "../models/likeDislike";

export class LikeDislikeController {
  private likeDislikeService: LikeDislikeService;
  constructor() {
    this.likeDislikeService = new LikeDislikeService();
  }

  findAll = async (req: Request, res: Response) => {
    const likeDislikeList = await this.likeDislikeService.findByPostId(
      req.params.postId
    );
    res.status(SUCCESS).json(likeDislikeList);
  };

  findById = async (req: Request, res: Response) => {
    const likeDislike = await this.likeDislikeService.findById(req.params.id);
    res.status(SUCCESS).json(likeDislike);
  };

  save = async (req: Request, res: Response) => {
    let likeDislike: LikeDislikeModel = req.body;
    likeDislike.postId = req.params.postId;
    console.log(`like `, likeDislike);
    likeDislike = await this.likeDislikeService.save(req.body);
    res.status(CREATED).json(`new likedislike created with ${likeDislike._id}`);
  };

  update = async (req: Request, res: Response) => {
    let likeDislike: LikeDislikeModel | null = req.body;
    if (likeDislike != null) {
      likeDislike.postId = req.params.postId;

      likeDislike = await this.likeDislikeService.update(
        req.params.id,
        likeDislike
      );
    }
    res.status(UPDATED).json(likeDislike);
  };

  delete = async (req: Request, res: Response) => {
    const isDeleted = await this.likeDislikeService.delete(req.params.id);
    if (isDeleted) res.status(DELETED).json(`sucessfully deleted.`);
    else res.status(INTERNAL_SERVER_ERROR).json(`something went wrong`);
  };
}
