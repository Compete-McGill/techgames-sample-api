import { sampleArticles } from "./article";
import { sampleUsers } from "./user";
import { Article, IArticleModel } from "../models/article";
import { User, IUserModel } from "../models/user";
import { createArticle } from "../interactions/ArticleDB";
import { createUser } from "../interactions/UserDB";

export const seedArticles = async () => {
    let user: IUserModel = null
    for (const sampleUser of sampleUsers) {
        const userSeed: IUserModel = new User(sampleUser);
        user = await createUser(userSeed);
    }
    let i = 0;
    for (const sampleArticle of sampleArticles) {
        sampleArticle.userId = user._id;
        const articleSeed: IArticleModel = new Article(sampleArticle);
        let article = await createArticle(articleSeed);
    }
};