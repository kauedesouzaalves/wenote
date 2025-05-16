import NoteEntity from "../entities/note.entity";
import UserEntity from "../entities/user.entity";

describe("Note Entity", () => {
    const user = new UserEntity({
        id: "1",
        displayName: "Kaue de Souza",
        username: "kauedesouzaalves",
        email: "kaue@souza.com",
        password: "Kaue!@#",
        notes: [],
        createdAt: new Date(),
        updatedAt: new Date(),
    });

    // const mainDir = new DirectoryEn

    const note = new NoteEntity({
        title: "Untitled",
        content: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "Lorem ipsum",
        impressions: 0,
        owner: user,
        parent: undefined,
        viewing: [],
    });

    it("Check initial data", () => {
        expect(note.title).toBe("Untitled");
        expect(note.content).toBe("");
        expect(note.createdAt).toBeDefined();
        expect(note.updatedAt).toBeDefined();
        expect(note.impressions).toBeDefined();
        expect(note.description).toBe("Lorem ipsum");
        expect(note.owner).toBe(user);
        expect(note.parent).toBeUndefined();
        expect(note.impressions).toBe(0);
        expect(Array.isArray(note.viewing)).toBe(true);
    });
});
