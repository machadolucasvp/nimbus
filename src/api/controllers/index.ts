import { AuthController } from './auth/auth.controller';
import { AuthService } from '@services/.';

const authController = new AuthController(AuthService)

export { authController as AuthController }