import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // when a data is recived through url it comes in many forms like searched hello+world or % to configure such data it is used.
app.use(express.static("public"));

app.use(cookieParser());

export { app };
