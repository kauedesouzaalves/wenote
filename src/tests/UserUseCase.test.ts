import PostgreUserRepository from "../repositories/PostgreUserRepository";
import UserUseCase from "../use-cases/UserUseCase";

describe("UserUseCase", () => {
    it("should create a user", async () => {
        const postgreUserRepository = new PostgreUserRepository();
        const userUseCase = new UserUseCase(postgreUserRepository);

        const user = await userUseCase.createUser({
            username: "johndoe",
            email: "john.doe@example.com",
            password: "teste123123",
            displayName: "John Doe",
        });

        console.log(user);
    });
});
