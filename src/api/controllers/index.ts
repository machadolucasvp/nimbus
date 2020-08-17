import { AuthController } from './auth/auth.controller';
import { authService } from '@services/.';
import { UserController } from './user/user.controller';
import { userService } from '@services/.'

const authController = new AuthController(authService);
const userController = new UserController(userService);

export {
  authController,
  AuthController,
  userController,
  UserController
}