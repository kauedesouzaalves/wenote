import { IUserEntity } from "@/entities/UserEntity";
import { IPostgreUserRepository } from "@/repositories/PostgreUserRepository";

export interface IUserUseCase {}

class UserUseCase implements IUserUseCase {
    constructor(private userRepository: IPostgreUserRepository) {}

    createUser(userProps: IUserEntity) {
        
    }
}

export default UserUseCase;
