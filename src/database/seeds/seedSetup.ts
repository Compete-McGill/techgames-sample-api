import { sampleArticles } from "./article";
import { Article, IArticleModel } from "../models/article";
import { createArticle } from "../interactions/ArticleDB";

export const seedArticles = async () => {
    for (const sampleArticle of sampleArticles) {
        const articleSeed: IArticleModel = new Article(sampleArticle);
        let user = await createArticle(articleSeed);
    }
};