import bcrypt from 'bcrypt'
import { sign } from 'jsonwebtoken';

import { IUserRepository } from "@repositories/user/user-interface.repository";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../../config";
import { IAuthService } from './auth-interface.service';

export class AuthService implements IAuthService {
  userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async login(id: number, password: string) {
    const user = await this.userRepository.findById(id);
    if (!user) throw new Error('User not found')

    const isValid = bcrypt.compare(password, user.password)
    if (!isValid) throw new Error('Invalid password')

    return {
      ...user,
      token: sign({ id: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
    }
  }
}