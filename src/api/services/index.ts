import { AuthService } from './auth/auth.service';
import { IAuthService } from './auth/auth-interface.service';
import { IUserService } from './user/user-interface.service';
import { UserService } from './user/user.service';

import { UserRepository } from '../repositories';

const authService = new AuthService(UserRepository)
const userService = new UserService(UserRepository);

export {
  authService as AuthService,
  userService as UserService,
  IAuthService,
  IUserService
}