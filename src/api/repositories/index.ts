import { UserRepository } from './user/user.repository';
import { IUserRepository} from './user/user-interface.repository';

const userRepository = new UserRepository();

export { userRepository as UserRepository, IUserRepository }
