import { IUserEntity } from "@/entities/UserEntity";
import { IPostgreUserRepository } from "@/repositories/PostgreUserRepository";
import UserDTO from "./dtos/UserDTO";

export interface IUserUseCase {
    createUser(
        userProps: Pick<
            IUserEntity,
            "displayName" | "username" | "email" | "password"
        >
    ): Promise<IUserEntity>;
    // getUserById(id: string): Promise<IUserEntity>;
}

class UserUseCase implements IUserUseCase {
    constructor(private userRepository: IPostgreUserRepository) {}

    async createUser(
        userProps: Pick<
            IUserEntity,
            "displayName" | "username" | "email" | "password"
        >
    ): Promise<IUserEntity> {
        const userData = await this.userRepository.createUser(userProps);
        const newUser = new UserDTO(userData).toEntity();
        return newUser;
    }

    // async getUserById(id: string): Promise<IUserEntity> {
    // const user = await this.userRepository.getUserById(id);

    // return user;
    // }
}

export default UserUseCase;
