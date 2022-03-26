import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

import indexRouter from "./routes/index";
import bubblesRouter from "./routes/bubbles";
import { allowOrigins } from "./middlewares/allow-origins";

var app = express();

app.use(cors({ origin: true }));
app.use(allowOrigins);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/", indexRouter);
app.use("/bubbles", bubblesRouter);

export default app;
