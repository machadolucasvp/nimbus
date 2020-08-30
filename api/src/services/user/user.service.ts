import { IUserRepository } from "@repositories/user/user-interface.repository";
import { IUserService } from "./user-interface.service";
import { User } from "@models/entities";

export class UserService implements IUserService {
  userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async create(user: User) {
    return this.userRepository.create(user);
  }

  async findById(id: number) {
    return this.userRepository.findById(id)
  }
}