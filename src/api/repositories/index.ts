import { UserRepository } from './user/user.repository';
import { getRepository } from 'typeorm';
import { User } from '@models/entities';

const userRepository = new UserRepository(() => getRepository(User));

export { userRepository, UserRepository }
