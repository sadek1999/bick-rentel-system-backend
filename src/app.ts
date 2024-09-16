import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/router";
import notFound from "./app/middlewares/notFound";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";

const app: Application = express();

app.use(express.json());
// app.use(cookieParser())
app.use(cors());

app.use("/api", router);


/**
 * This is the root route handler for the application.
 * It sends a "Hello World!" message as a response to any GET request made to the root ("/") path.
 *
 * @param req - The Express request object.
 * @param res - The Express response object.
 *
 * @returns {void} - The function does not return any value.
 * It sends a response with the "Hello World!" message.
 */
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
