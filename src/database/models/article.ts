import { Document, Model, model, Schema } from "mongoose";
import { IArticle } from "../../interfaces/IArticle";

export interface IArticleModel extends IArticle, Document { }

const articleSchema: Schema = new Schema({
    title: String,
    subtitle: String,
    body: String,
    author: String,
},
    {
        timestamps: true
    }
);

const Article: Model<IArticleModel> = model("Article", articleSchema);

export { Article };
