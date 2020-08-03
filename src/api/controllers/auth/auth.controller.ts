import { IAuthService } from "@services/.";
import { Context } from "koa";

export class AuthController {
  authService: IAuthService;

  constructor(authService: IAuthService) {
    this.authService = authService;
  }

  async login(ctx: Context) {
    const { email, password } = ctx.request.body;

    try {
      ctx.body = this.authService.login(email, password)
      ctx.status = 200

    } catch (err) {
      ctx.body = { error: { ...err } }
      ctx.status = 400
    }
  }
}