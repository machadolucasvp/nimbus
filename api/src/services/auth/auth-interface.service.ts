import { User } from "../../models/entities";

export interface IAuthService {
  login: (id: number, hash: string) => Promise<User & { token: string }>
}