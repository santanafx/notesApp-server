import { UserRepository } from "../repositories/UserRepository/UserRepository";
import { CreateNewUser } from "../services/UserServices/CreateNewUser.service";
import { Login } from "../services/UserServices/Login.service";

export class UserController {
  create(req, res) {
    const userRepository = new UserRepository();
    const createUserService = new CreateNewUser(userRepository);
    const { email, password } = req.body;

    try {
      const user = createUserService.execute(email, password);
      return res.json({ message: "user created", user });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  login(req, res) {
    const userRepository = new UserRepository();
    const loginService = new Login(userRepository);
    const { email, password } = req.body;

    try {
      const token = loginService.execute(email, password);
      return res.json({ token });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
}
