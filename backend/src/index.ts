import express, { Application, Request, Response } from "express";
import cors from "cors";
import { errorHandlingMiddleware } from "./middleware/errorHandlingMiddleware";
import apiRouter from "./routes";
import dotenv from "dotenv";
import passport from "./utils/passport";
import loggerMiddleware from "./middleware/loggingMiddleware";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.use(loggerMiddleware);

app.get("/", (req: Request, res: Response) => {
  console.log("hit");
  res.send("server is working");
});

app.use("/api", apiRouter);

//  errorHandlingMiddleware has to be the last middleware intitiallized
app.use(errorHandlingMiddleware);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}...`);
});
