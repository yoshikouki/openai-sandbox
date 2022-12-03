import { EventMessage, WebhookEvent } from "@line/bot-sdk";
import { lineClient } from "../lib/line";
import openAi from "../lib/openai";

export const lineEventHandler = async (event: WebhookEvent) => {
  if (event.type === "message") {
    const { message, replyToken } = event
    const text = await generateReplyMessage(message)
    return lineClient.replyMessage(replyToken, { type: "text", text });
  }
}

const generateReplyMessage = async (message: EventMessage) => {
  if (message.type === "text") {
    const replyMessage = await openAi.conversation(message.text);
    return replyMessage ? replyMessage.trim() : "(返事ありませんでした...)"
  } else {
    return "テキストメッセージを送信してください"
  }
}
