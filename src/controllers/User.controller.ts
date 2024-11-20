import { UserRepository } from "../repositories/UserRepository/UserRepository";
import { CreateNewUser } from "../services/UserServices/CreateNewUser.service";
import { Login } from "../services/UserServices/Login.service";

export class UserController {
  async create(req, res) {
    const userRepository = new UserRepository();
    const createUserService = new CreateNewUser(userRepository);
    const { email, password } = req.body;

    try {
      const user = await createUserService.execute(email, password);
      return res.json({ message: "user created", user: user });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  async login(req, res) {
    const userRepository = new UserRepository();
    const loginService = new Login(userRepository);
    const { email, password } = req.body;

    try {
      const response = await loginService.execute(email, password);
      return res.json({ token: response.token, user: response.user });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
}
