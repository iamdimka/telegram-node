import { request } from "https";
import { IncomingMessage } from "http";
import TelegramError from "./TelegramError";
import Telegram from "./Telegram";
import { stringify } from "querystring";
import FormData from "./FormData";

declare namespace Bot {
  const enum AllowedUpdate {
    message = "message",
    editedMessage = "edited_message",
    channelPost = "channel_post",
    editedChannelPost = "edited_channel_post",
    inlineQuery = "inline_query",
    chosenInlineResult = "chosen_inline_result",
    callbackQuery = "callback_query",
    shippingQuery = "shipping_query",
    preCheckoutQuery = "pre_checkout_query",
    poll = "poll",
    pollAnswer = "poll_answer"
  }

  const enum RequestType {
    querystring = "querystring",
    urlencoded = "urlencoded",
    json = "json",
    formdata = "formdata"
  }

  interface OverrideAPI {
    "getMe": {
      response: Telegram.User;
    };
  }

  type API = Telegram.API & OverrideAPI;

  type Request<T extends keyof API> = API[T] extends { request: infer R; } ? R : null;
  type RequestArgs<T extends keyof API> = API[T] extends { request: infer R; } ? [R] | [R, RequestType] : [] | [RequestType];
  type Response<T extends keyof API> = API[T] extends { response: infer R; } ? R : void;
}

class Bot {
  protected botID: string;
  protected prefix: string;

  constructor(botID: string) {
    this.botID = botID.startsWith("bot") ? botID.substring(3) : botID;
    this.prefix = `/bot${this.botID}/`;
  }

  async request<M extends keyof Bot.API>(method: M, ...args: Bot.RequestArgs<M>): Promise<Bot.Response<M>>;
  async request(method: string, payload?: any, requestType?: string): Promise<any> {
    const res = await new Promise<IncomingMessage>((resolve, reject) => {
      if (!requestType) {
        if (typeof payload === "string") {
          requestType = payload;
          payload = undefined;
        } else {
          requestType = "json";
        }
      }

      if (payload instanceof FormData) {
        requestType = Bot.RequestType.formdata;
      }

      let path = this.prefix + method;
      let contentType: string | undefined = undefined;
      let body: Buffer | null = null;

      if (payload) {
        switch (requestType) {
          case "querystring":
            if (payload) {
              path += `?${stringify(payload)}`;
            }
            break;

          case "urlencoded":
            contentType = "application/x-www-form-urlencoded";
            body = Buffer.from(stringify(payload));
            break;

          case "json":
            contentType = "application/json";
            body = Buffer.from(JSON.stringify(payload));
            break;

          case "formdata":
            const form = (payload as FormData).data();
            contentType = form.contentType;
            body = Buffer.from(form.body, "binary");
            break;

          default:
            throw new TypeError();
        }
      }

      const req = request({
        hostname: "api.telegram.org",
        path: this.prefix + method,
        headers: {
          "Content-Type": contentType || "application/json",
          "Content-Length": body ? body.length : 0
        }
      }, resolve)
        .on("error", reject)
        .end(body);
    });

    const data = await new Promise<Buffer>((resolve, reject) => {
      const chunks: Buffer[] = [];

      res.on("data", chunks.push.bind(chunks))
        .on("end", () => resolve(Buffer.concat(chunks)))
        .on("error", reject);
    });

    if (!data.length) {
      throw new TelegramError({ error_code: res.statusCode!, description: res.statusMessage! });
    }

    const json = JSON.parse(data.toString());
    if (json.ok) {
      return json.result;
    }

    throw new TelegramError(json);
  }

  me() {
    return this.request("getMe");
  }
}

export default Bot;