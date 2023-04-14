import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
import Joi from "joi";

dotenv.config();

const router = express.Router();

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY environment variable is not set");
}

const promptSchema = Joi.object({
  prompt: Joi.string().min(1).max(1000).required(),
});

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" });
});

router.route("/").post(async (req, res) => {
  try {
    const { error, value } = promptSchema.validate(req.body);
    if (error) {
      throw new Error(error.details[0].message);
    }

    const response = await openai.createImage({
      prompt: value.prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    if (response.data.error) {
      throw new Error(response.data.error.message);
    }

    const image = response.data.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
