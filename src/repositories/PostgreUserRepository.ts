import { IUserEntity } from "@/entities/UserEntity";
import postgre from "../infrastructure/database/postgre";
import { IUserDB } from "@/use-cases/dtos/UserDTO";

export interface IPostgreUserRepository {
    createUser(
        userProps: Pick<
            IUserEntity,
            "displayName" | "username" | "email" | "password"
        >
    ): Promise<IUserDB>;
}

class PostgreUserRepository implements IPostgreUserRepository {
    async createUser(
        userProps: Pick<
            IUserEntity,
            "displayName" | "username" | "email" | "password"
        >
    ): Promise<IUserDB> {
        const newUser = await postgre.query(
            `INSERT INTO users (username, display_name, email, password)
            VALUES ($1, $2, $3, $4)
            RETURNING id, username, display_name, email, password, created_at, updated_at`,
            [
                userProps.username,
                userProps.displayName,
                userProps.email,
                userProps.password,
            ]
        );

        return newUser.rows[0];
    }

    getUserById(id: string) {}
}

export default PostgreUserRepository;
