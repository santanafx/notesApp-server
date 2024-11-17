import { User } from "../entities/User.entity";
import { IUserRepository } from "../repositories/IUserRepository";

export class CreateNewUser {
  constructor(private userRepository: IUserRepository) {}

  async execute(email: string, password: string) {
    const existingUser = await this.userRepository.findUser(email);
    if (existingUser) {
      throw new Error("User already exists");
    }
    const user = new User(email, password);
    return await this.userRepository.createNewUser(user.email, user.password);
  }
}
