import { usernameValidator } from "./validators/user/usernameValidator";

export interface IUserEntity {
    id: string;
    username: string;
    displayName: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

class UserEntity implements IUserEntity {
    id: string;
    username: string;
    displayName: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(userProps: IUserEntity) {
        if (!usernameValidator(userProps.username))
            throw Error("Username must be between 3 and 32 characters long.");

        this.id = userProps.id;
        this.username = userProps.username;
        this.displayName = userProps.displayName;
        this.email = userProps.email;
        this.password = userProps.password;
        this.createdAt = userProps.createdAt;
        this.updatedAt = userProps.updatedAt;
    }
}

export default UserEntity;
