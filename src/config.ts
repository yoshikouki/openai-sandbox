import dotenv from "dotenv";

dotenv.config();

const config = {
  openAi: {
    apiKey: process.env.OPENAI_API_KEY || "",
    model: process.env.OPENAI_MODEL || "text-davinci-003",
    temperature: Number(process.env.OPENAI_TEMPERATURE) || 0.9,
    max_tokens: Number(process.env.OPENAI_MAX_TOKENS) || 2048,
  },
  server: {
    port: Number(process.env.PORT) || 3000,
  },
  line: {
    channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN || "",
    channelSecret: process.env.LINE_CHANNEL_SECRET || "",
  },
};

export default config;
