import express from "express";
import config from "./config";
import helmet from "helmet";
import morgan from "morgan";
import { lineMiddleware, lineWebhookErrorHandler } from "./lib/line";
import { WebhookRequestBody } from "@line/bot-sdk";
import { lineEventHandler } from "./services/line-event-handler";

const app: express.Express = express();

app.use("/v1/webhooks/line", lineMiddleware) // Require to define above express.json()
app.use(lineWebhookErrorHandler);
app.use(express.json());
app.use(morgan("combined"));
app.use(helmet());

app.post(
  "/v1/webhooks/line",
  async (req: { body: WebhookRequestBody }, res) => {
    const { events } = req.body;
    await Promise.all(events.map((event) => lineEventHandler(event)));
    res.send("OK");
  }
);

export const runServer = () => app.listen(config.server.port, () => {
  console.log(`listen: ${config.server.port}`);
});
