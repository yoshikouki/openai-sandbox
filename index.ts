import { config } from "dotenv";
import { Configuration, OpenAIApi } from "openai";
import { createInterface } from "readline";

config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

;
const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> ",
});

const conversation = async (input: string) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: input,
    temperature: 1.0,
    max_tokens: 128,
  });
  return response.data.choices[0].text;
};

readline.prompt();
readline.on("line", async (input) => {
  const reply = await conversation(input);
  console.log(reply);
  console.log("\n--------------------\n");
  readline.prompt();
});
