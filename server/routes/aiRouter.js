import express from "express";
import * as dotenv from "dotenv";
import FormData from "form-data";
import fetch from "node-fetch";

dotenv.config();

const aiRouter = express.Router();

// aiRouter.get("/", (req, res) => {
//   res.send("Hello from Stability AI!");
// });

aiRouter.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;

    const form = new FormData();
    form.append("prompt", prompt);
    form.append("output_format", "jpeg");

    const response = await fetch(
      "https://api.stability.ai/v2beta/stable-image/generate/core",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
          Accept: "application/json",
          ...form.getHeaders(),
        },
        body: form,
      }
    );

    const result = await response.json();

    if (result && result.image) {
      res.status(200).json({ success: true, data: result.image });
      console.log("Data received from Stability AI API : ", result);
    }
  } catch (error) {
    res.status(500).json({ success: false, data: result.name });
    console.log("Data not received from Stability AI API : ", error);
  }
});

export default aiRouter;
