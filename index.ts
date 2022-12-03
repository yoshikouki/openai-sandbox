import { createInterface } from "readline";
import openAi from "./src/lib/openai";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "\n\x1b[34m--------------------\n\n\x1b[36m>\x1b[0m ",
});

readline.prompt();
readline.on("line", async (input) => {
  const reply = await openAi.conversation(input);
  console.log(reply);
  readline.prompt();
});
