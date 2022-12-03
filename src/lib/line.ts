import { Client, JSONParseError, middleware, SignatureValidationFailed } from "@line/bot-sdk";
import config from "../config";
import express from "express";

export const lineClient = new Client(config.line);
export const lineMiddleware = middleware(config.line);

export const lineWebhookErrorHandler = (
  err: Error,
  _req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (err instanceof SignatureValidationFailed) {
    res.status(401).send(`Unauthorized. ${err.signature || ""}`);
    return;
  } else if (err instanceof JSONParseError) {
    res.status(400).send(`Bad Request. ${err.raw || ""}`);
    return;
  }
  next(err); // will throw default 500
};
