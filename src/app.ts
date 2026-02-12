import cors from "cors";
import express from "express";
import { Request, Response, NextFunction } from "express";


const app = express();

// Middleware
app.use(cors()); // Enables Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Default route for testing
app.get("/", (_req: Request, res: Response , next: NextFunction) => {
  res.send("API is running");
   next();
});


// 404 Handler
app.use((_req: Request, res: Response , next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
  next();
});

export default app;
