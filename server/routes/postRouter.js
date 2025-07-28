import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import PostModel from "../mongodb/models/post.js";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const postRouter = express.Router();

// Router 1 = POST images to CLOUDINARY and MONGODB
postRouter.post("/", async (req, res) => {
  try {
    const { name, prompt, image } = req.body;

    const imageUrl = await cloudinary.uploader.upload(image);

    const newPost = await PostModel.create({
      name,
      prompt,
      image: imageUrl.url,
    });

    if (imageUrl && newPost) {
      res.status(200).json({ success: true, data: newPost });
      console.log(
        "Data uploaded to Cloudinary and saved on MongoDB : ",
        imageUrl,
        newPost
      );
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
    console.log(
      "Data not uploaded to Cloudinary and saved on MongoDB : ",
      error
    );
  }
});

// Router 2 = GET posts to Community Page
postRouter.get("/", async (req, res) => {
  try {
    const posts = await PostModel.find({});
    res.status(200).json({ success: true, data: posts });
    console.log("Data sent on Home Community Page : ", posts);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
    console.log("Data not sent on Home Community Page :", error);
  }
});

export default postRouter;
