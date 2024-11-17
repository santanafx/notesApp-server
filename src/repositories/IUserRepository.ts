import { User } from "../entities/User.entity";

export interface IUserRepository {
  findUser(email: string): Promise<User>;
  createNewUser(email: string, password: string): Promise<User>;
  login(email: string): Promise<User>;
  comparePasswords(password: string, hash: string): Promise<boolean>;
  createJWT(id: string, username: string): Promise<string>;
}
