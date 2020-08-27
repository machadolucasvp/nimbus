import { User } from "../../models/entities";

export interface IUserService {
  create: (user: User) => Promise<User>
  findById: (id: number) => Promise<User | undefined>
}