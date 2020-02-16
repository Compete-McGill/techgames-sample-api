import { Document, Model, model, Schema } from "mongoose";
import { IUser } from "../../interfaces/IUser";

export interface IUserModel extends IUser, Document { }

const userSchema: Schema = new Schema({
    email: String,
    password: String,
},
    {
        timestamps: true
    }
);

const User: Model<IUserModel> = model("User", userSchema);

export { User };
