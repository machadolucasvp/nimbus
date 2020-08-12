import { AuthController } from './auth/auth.controller';
import { AuthService } from '@services/.';
import { UserController } from './user/user.controller';
import { UserService } from '@services/.'

const authController = new AuthController(AuthService);
const userController = new UserController(UserService);

export {
  authController as AuthController,
  userController as UserController
}