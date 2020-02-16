import { ErrorFormatter } from "express-validator/check";

const errMsg: ErrorFormatter<{}> = ({ location, msg, param }): {} => {
    return {
        status: 400,
        message: `${location}[${param}]: ${msg}`
    };
};

export { errMsg };