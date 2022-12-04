import { Express } from "express";
import { WebhookRequestBody } from "@line/bot-sdk";
import { lineEventHandler } from "../services/line-event-handler";

export const setupRoutes = (app: Express) => {
  app.get("/health", (_req, res) => res.send("OK"))

  app.post(
    "/v1/webhooks/line",
    async (req: { body: WebhookRequestBody }, res) => {
      const { events } = req.body;
      await Promise.all(events.map((event) => lineEventHandler(event)));
      res.send("OK");
    }
  );
};
