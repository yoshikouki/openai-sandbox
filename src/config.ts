import dotenv from "dotenv";

dotenv.config();

const config = {
  openAi: {
    apiKey: process.env.OPENAI_API_KEY || "",
    model: process.env.OPENAI_MODEL  || "text-davinci-003",
    temperature: Number(process.env.OPENAI_TEMPERATURE)  || 1.0,
    max_tokens: Number(process.env.OPENAI_MAX_TOKENS)  || 128,
  },
};

export default config;
