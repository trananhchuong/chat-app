import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";

const app = express();

dotenv.config();

// PORT should be assigned after calling dotenv.config() because we need to access the env variables.
const PORT = process.env.PORT || 8000;

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  console.log("🚀 ~ app.get ~ Hello World!");
});

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
