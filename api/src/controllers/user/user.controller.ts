
import { RouterContext } from "koa-router";
import { IUserService } from "@services/.";

export class UserController {
  userService: IUserService;

  constructor(userService: IUserService) {
    this.userService = userService;
  }

  async post(ctx: RouterContext) {
    const user = ctx.request.body;

    try {
      const createdUser = await this.userService.create({ ...user });

      ctx.body = { ...createdUser };
      ctx.status = 200;

    } catch (err) {
      ctx.body = { error: { ...err } };
      ctx.status = 400;
    }
  }

  async get(ctx: RouterContext) {
    const { id } = ctx.params

    try {
      const user = await this.userService.findById(id);

      ctx.body = { ...user };
      ctx.status = 200;
      
    } catch (err) {
      ctx.body = { error: { ...err } };
      ctx.status = 400;
    }
  }
}