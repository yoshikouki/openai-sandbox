import express from "express";
import config from "./config";
import helmet from "helmet";
import morgan from "morgan";
import { lineMiddleware, lineWebhookErrorHandler } from "./lib/line";
import { setupRoutes } from "./routes";

const app: express.Express = express();

app.use("/v1/webhooks/line", lineMiddleware) // Require to define above express.json()
app.use(lineWebhookErrorHandler);
app.use(express.json());
app.use(morgan("combined"));
app.use(helmet());

setupRoutes(app);

export const runServer = () => app.listen(config.server.port, () => {
  console.log(`listen: ${config.server.port}`);
});
