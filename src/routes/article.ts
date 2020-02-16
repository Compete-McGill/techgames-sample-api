import { Router } from "express";
import { articleController } from "../controllers/article";
import { articleValidator } from "../validators/article";

const articleRouter: Router = Router();

articleRouter.get("/", articleValidator("GET /articles"), articleController.index);

articleRouter.get("/:articleId", articleValidator("GET /articles/:articleId"), articleController.show);

articleRouter.post("/", articleValidator("POST /articles"), articleController.create);

articleRouter.put("/:articleId", articleValidator("PUT /articles/:articleId"), articleController.update);

articleRouter.delete("/:articleId", articleValidator("DELETE /articles/:articleId"), articleController.delete);

export { articleRouter };