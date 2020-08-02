import { UserRepository } from './user/user.repository';
import { BaseRepository } from './base.repository';

const userRepository = new UserRepository();

export { userRepository as UserRepository }
