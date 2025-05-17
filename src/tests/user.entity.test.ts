import UserEntity from "../entities/user.entity";

describe("User Entity", () => {
    const user = new UserEntity({
        id: "1",
        displayName: "Kaue de Souza Alves",
        username: "kauedesouzaalves",
        email: "kaue@souza.com",
        password: "Kaue!@#",
        notes: [],
        createdAt: new Date(),
        updatedAt: new Date(),
    });

    it("Check initial data", () => {
        expect(user.id).toBe("1");
        expect(user.displayName).toBe("Kaue de Souza Alves");
        expect(user.username).toBe("kauedesouzaalves");
        expect(user.email).toBe("kaue@souza.com");
        expect(user.password).toBe("Kaue!@#");
        expect(user.notes).toEqual([]);
        expect(user.createdAt).toBeInstanceOf(Date);
        expect(user.updatedAt).toBeInstanceOf(Date);
    });
});
