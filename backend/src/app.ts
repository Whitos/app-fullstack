import dotenv from "dotenv";
import express, { Application } from "express";
import cors from "cors";
import router from "./api/routes/todoRoutes";

dotenv.config();

const { FRONTURL } = process.env;

const app: Application = express();

app.use(cors({ origin: FRONTURL, methods: ["GET", "POST", "PUT", "DELETE"] }));

app.use(express.json());

app.use("/api", router);

export default app;
