import express, { json } from "express";
import cors from "cors";

import logger from "morgan";

import apiroutes from "./api-routes.js";

const listen_port = 8000;

const app = express();

app.use(cors({ origin: "*" }));
app.use(json());
app.use(logger("dev"));

app.use("/", apiroutes);

app.listen(listen_port, () => {
  console.log(`Listening to port${listen_port}`);
});
