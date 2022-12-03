import express from "express";
import config from "./config";
import helmet from "helmet";
import morgan from "morgan";

const app: express.Express = express();

app.use(express.json());
app.use(morgan("combined"));
app.use(helmet());

app.post("/v1/webhooks/line", async (req, res) => {
  const message = req.body;
  console.log(message);
  res.send("OK");
});

export const runServer = () => app.listen(config.server.port, () => {
  console.log(`listen: ${config.server.port}`);
});
