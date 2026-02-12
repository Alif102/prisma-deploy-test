import http from "http";
import app from "./app";
import dotenv from "dotenv";
import { prisma } from "../config/db";

dotenv.config();

async function startServer() {
  try {
    // Connect DB
    await prisma.$connect();
    console.log("✅ DB connected successfully");

    // Start Server
    const server = http.createServer(app);

    const PORT = process.env.PORT || 5000;

    server.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server start failed:", error);
    process.exit(1);
  }
}

startServer();
