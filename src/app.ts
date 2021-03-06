import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import { Application, Request, Response } from "express";

import { articleRouter } from "./routes/article";

dotenv.config();

const app: Application = express();
const port = process.env.SERVER_PORT;

app.use(bodyParser.json());
app.use(cors());
app.use("/articles", articleRouter);

if (port == "") {
    // tslint:disable-next-line:no-console
    console.log("Missing environment variables for configuration (check .env.example and create a .env)")
    process.exit(1);
}

app.get("/status", (req: Request, res: Response) => {
    res.status(200).send({
        status: "Up"
    })
});

app.use((req: Request, res: Response) => {
    res.status(404).send({
        status: 404,
        message: "Invalid route"
    });
});

export { app, port }
