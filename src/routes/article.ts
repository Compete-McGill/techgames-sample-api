import { Router } from "express";
import { articleController } from "../controllers/article";

const articleRouter: Router = Router();

articleRouter.get("/", articleController.index);

articleRouter.get("/:articleId", articleController.show);

articleRouter.post("/", articleController.create);

export { articleRouter };