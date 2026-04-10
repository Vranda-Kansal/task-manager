import express from "express";
import cors from "cors";

import taskRoutes from "./routes/taskRoutes.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use(taskRoutes);

export default app; // ✅
