import { IUser } from "../../interfaces/IUser";
import { IUserModel, User } from "../models/user";

export const createUser = (user: IUser): Promise<IUserModel> => {
    return User.create(user);
};

export const getUsers = (): Promise<IUserModel[]> => {
    return User.find().exec();
};
