import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root Route
app.get("/", (_req: Request, res: Response) => {
  res.send("API is running");
});

export default app;
