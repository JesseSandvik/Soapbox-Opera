import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const app: Express = express()
    .get("/", (req: Request, res: Response) => {
    res.json("Hello world!");
    });

export default app;
