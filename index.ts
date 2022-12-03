import { config } from "dotenv";

config();

const openAiApiKey: string = process.env.OPENAI_API_KEY || ""
const openai: string = "Hello, openai";

console.log(openAiApiKey);
console.log(openai);
