import { AuthService } from './auth/auth.service';
import { IAuthService } from './auth/auth-interface.service';
import { IUserService } from './user/user-interface.service';
import { UserService } from './user/user.service';

import { userRepository } from '../repositories';

const authService = new AuthService(userRepository)
const userService = new UserService(userRepository);

export {
  authService,
  IAuthService,
  userService,
  IUserService
}