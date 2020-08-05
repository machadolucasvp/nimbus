import { UserRepository } from './user/user.repository';
import { IUserRepository } from './user/user-interface.repository';
import { getRepository } from 'typeorm';
import { User } from '@models/entities';

const userRepository = new UserRepository(() => getRepository(User));

export { userRepository as UserRepository, IUserRepository }
