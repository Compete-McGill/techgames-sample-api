import { Request, Response } from "express";
import { getArticle, getArticles, createArticle } from "../database/interactions/ArticleDB";
import { Article, IArticleModel } from "../database/models/article";

const articleController = {

    index: async (req: Request, res: Response) => {
        try {
            const articles = await getArticles();
            res.status(200).send(articles);
        } catch (err) {
            // TODO: proper error handling + msgs/error codes
            res.status(500).send(err);
        }
    },

    show: async (req: Request, res: Response) => {
        // TODO: input validation
        try {
            const articleId: string = req.params.articleId;
            const article: IArticleModel = await getArticle(articleId);
            article ? res.status(200).send(article) : res.status(404).send({ status: 404, message: "Article not found" });
        } catch (error) {
            res.status(500).send(error);
        }
    },

    create: async (req: Request, res: Response) => {
        try {
            const article: IArticleModel = req.body;
            const createdArticle: IArticleModel = await createArticle(req.body);
            res.status(200).send(createdArticle);
        } catch (error) {
            res.status(500).send(error);
        }
    },
};


export { articleController };