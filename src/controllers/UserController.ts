import { IUserUseCase } from "@/use-cases/UserUseCase";

class UserController {
    constructor(private userUseCase: IUserUseCase) {}
}

export default UserController;
