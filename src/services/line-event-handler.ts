import { WebhookEvent } from "@line/bot-sdk";
import { lineClient } from "../lib/line";

export const lineEventHandler = async (event: WebhookEvent) => {
  if (event.type === "message") {
    const { message, replyToken } = event
    const text = message.type === "text" ? message.text : "テキストメッセージを送信してください";
    return lineClient.replyMessage(replyToken, { type: "text", text });
  }
}
