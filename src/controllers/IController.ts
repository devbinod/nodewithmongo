import { LoginController } from "./login.controller";
import { UserController } from "./user.controller";
import { PostController } from "./post.controller";

export class IController {
  constructor() {
    new UserController();
    new PostController();
    new LoginController();
  }
}
