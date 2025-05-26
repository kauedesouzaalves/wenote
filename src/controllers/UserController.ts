import { IUserEntity } from "@/entities/UserEntity";
import { IUserUseCase } from "@/use-cases/UserUseCase";

interface UserCredentials {
    displayName: string;
    username: string;
    email: string;
    password: string;
}

export interface IUserController {
    registerUser(userCredentials: UserCredentials): Promise<IUserEntity>;
    getUserById(): void;
}

class UserController implements IUserController {
    constructor(private userUseCase: IUserUseCase) {}

    async registerUser(userCredentials: UserCredentials): Promise<IUserEntity> {
        const newUser = await this.userUseCase.createUser(userCredentials);
        return newUser;
    }

    getUserById() {}
}

export default UserController;
