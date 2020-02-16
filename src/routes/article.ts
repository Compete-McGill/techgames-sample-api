import { Router } from "express";
import { articleController } from "../controllers/article";

const articleRouter: Router = Router();

articleRouter.get("/", articleController.index);

articleRouter.get("/:articleId", articleController.show);

articleRouter.post("/", articleController.create);

articleRouter.put("/:articleId", articleController.update);

articleRouter.delete("/:articleId", articleController.delete);

export { articleRouter };