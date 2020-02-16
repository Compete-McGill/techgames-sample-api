import { IArticle } from "../../interfaces/IArticle";
import { IArticleModel, Article } from "../models/article";

export const createArticle = (article: IArticle): Promise<IArticleModel> => {
    return Article.create(article);
};

export const getArticles = (): Promise<IArticleModel[]> => {
    return Article.find().exec();
};

export const getArticle = (articleId: string): Promise<IArticleModel> => {
    return Article.findOne({ _id: articleId }).exec();
};

export const updateArticle = (articleId: string, article: IArticle): Promise<IArticleModel> => {
    return Article.findOneAndUpdate({ _id: articleId }, article).exec()
}

export const deleteArticle = (articleId: string): Promise<IArticleModel> => {
    return Article.findByIdAndDelete(articleId).exec()
}
