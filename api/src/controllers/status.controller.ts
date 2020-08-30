import { RouterContext } from "koa-router";

export class AuthController {
  async status(ctx: RouterContext) {
    ctx.body = { message: "Up" }
    ctx.status = 200
  }
}