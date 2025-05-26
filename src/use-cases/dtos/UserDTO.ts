import UserEntity, { IUserEntity } from "@/entities/UserEntity";

export interface IUserDB {
    id: string;
    username: string;
    display_name: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
}

export interface IUserDTO {
    toEntity(): IUserEntity;
}

class UserDTO implements IUserDTO {
    constructor(private databaseUser: IUserDB) {}

    toEntity(): IUserEntity {
        const entity = new UserEntity({
            ...this.databaseUser,
            createdAt: new Date(this.databaseUser.created_at),
            updatedAt: new Date(this.databaseUser.updated_at),
            displayName: this.databaseUser.display_name,
        });
        return entity;
    }
}

export default UserDTO;
