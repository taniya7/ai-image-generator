import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./mongodb/connect.js";

import aiRouter from "./routes/aiRouter.js";
import postRouter from "./routes/postRouter.js";

const PORT = process.env.PORT || 8080;

dotenv.config();

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors());

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () =>
      console.log(`Server has started on port http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(
      "Server not started on port http://localhost:8080 due to ",
      error
    );
  }
};

startServer();

app.get("/", (req, res) => {
  res.send("Hello from server!");
});

app.use("/api/ai", aiRouter);
app.use("/api/post", postRouter);
