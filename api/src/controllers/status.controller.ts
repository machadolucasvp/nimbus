import { RouterContext } from "koa-router";

export class StatusController {
  async status(ctx: RouterContext) {
    ctx.body = { message: "Up" }
    ctx.status = 200
  }
}