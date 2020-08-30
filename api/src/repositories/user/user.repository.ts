import { User } from "@models/entities";
import { BaseRepository } from '../base.repository';
import { IUserRepository } from "./user-interface.repository";

export class UserRepository extends BaseRepository<User, number> implements IUserRepository{
  constructor(repository: any) {
    super(repository);
  }
}