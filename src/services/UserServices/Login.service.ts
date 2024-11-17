import { IUserRepository } from "../../repositories/UserRepository/UserRepository.interface";

export class Login {
  constructor(private userRepository: IUserRepository) {}

  async execute(email: string, password: string) {
    const user = await this.userRepository.findUser(email);
    if (!user) {
      throw new Error("User not found");
    }
    const isPasswordValid = await this.userRepository.comparePasswords(
      password,
      user.password
    );
    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }
    const token = await this.userRepository.createJWT(user.id, email);
    return token;
  }
}
