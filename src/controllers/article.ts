import { Request, Response } from "express";
import { getArticle, getArticles, createArticle, updateArticle, deleteArticle } from "../database/interactions/ArticleDB";
import { Article, IArticleModel } from "../database/models/article";
import { IArticle } from "../interfaces/IArticle";
import { validationResult } from "express-validator/check";
import { errMsg } from "../util/error";

const articleController = {

    index: async (req: Request, res: Response) => {
        try {
            const articles = await getArticles();
            res.status(200).send(articles);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    show: async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json(errors.formatWith(errMsg).array()[0]);
        } else {
            try {
                const articleId: string = req.params.articleId;
                const article: IArticleModel = await getArticle(articleId);
                article ? res.status(200).send(article) : res.status(404).send({ status: 404, message: "Article not found" });
            } catch (error) {
                res.status(500).send(error);
            }
        }
    },

    create: async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json(errors.formatWith(errMsg).array()[0]);
        } else {
            try {
                const article: IArticleModel = req.body;
                const createdArticle: IArticleModel = await createArticle(article);
                res.status(200).send(createdArticle);
            } catch (error) {
                res.status(500).send(error);
            }
        }
    },


    update: async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json(errors.formatWith(errMsg).array()[0]);
        } else {
            try {
                const { articleId } = req.params;
                const article: IArticleModel = await getArticle(articleId)
                if (!article)
                    res.status(404).send({ status: 404, message: "Article not found" });
                else {
                    const articleObject: IArticle = {
                        title: article.title,
                        subtitle: article.subtitle,
                        body: article.body,
                        author: article.author,
                    };
                    const updatedVariables: IArticle = {
                        ...articleObject,
                        ...req.body
                    };
                    const updatedArticle: IArticleModel = await updateArticle(articleId, updatedVariables);
                    res.status(200).send(updatedArticle);
                }
            } catch (error) {
                res.status(500).send(error);
            }
        }

    },

    delete: async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json(errors.formatWith(errMsg).array()[0]);
        } else {
            try {
                const { articleId } = req.params;
                const article: IArticleModel = await deleteArticle(articleId);
                if (!article)
                    res.status(404).send({ status: 404, message: "Article not found" });
                res.status(200).send({
                    message: "Article successfully deleted."
                });
            } catch (error) {
                res.status(500).send(error);
            }
        }
    }


};


export { articleController };
