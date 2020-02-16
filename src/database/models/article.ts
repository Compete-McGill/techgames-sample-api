import { Document, Model, model, Schema } from "mongoose";
import { IArticle } from "../../interfaces/IArticle";

export interface IArticleModel extends IArticle, Document { }

const articleSchema: Schema = new Schema({
    title: String,
    subtitle: String,
    leadParagraph: String,
    imageUrl: String,
    body: String,
    author: String,
    userId: String,
    date: String,
    category: String
},
    {
        timestamps: true
    }
);

const Article: Model<IArticleModel> = model("Article", articleSchema);

export { Article };
