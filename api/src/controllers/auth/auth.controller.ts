import { IAuthService } from "api/services";
import { RouterContext } from "koa-router";

export class AuthController {
  authService: IAuthService;

  constructor(authService: IAuthService) {
    this.authService = authService;
  }

  async login(ctx: RouterContext) {
    const { email, password } = ctx.request.body;

    try {
      ctx.body = await this.authService.login(email, password)
      ctx.status = 200

    } catch (err) {
      ctx.body = { error: { ...err } }
      ctx.status = 400
    }
  }
}