import { Configuration, OpenAIApi } from "openai";
import config from "../config";

const configuration = new Configuration({
  apiKey: config.openAi.apiKey,
});
const openAiApi = new OpenAIApi(configuration);

const conversation = async (input: string) => {
  const response = await openAiApi.createCompletion({
    prompt: input,
    model: config.openAi.model,
    temperature: config.openAi.temperature,
    max_tokens: config.openAi.max_tokens,
  });
  return response.data.choices[0].text;
};

const openAi = {
  openAiApi,
  conversation,
};

export default openAi;
