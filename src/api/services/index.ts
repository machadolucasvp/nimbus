import { AuthService } from './auth/auth.service';
import { IAuthService } from './auth/auth-interface.service';

import { UserRepository } from '../repositories';

const authService = new AuthService(UserRepository)

export { authService as AuthService, IAuthService }