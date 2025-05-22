import { INoteUseCase } from "@/use-cases/NoteUseCase";

class NoteController {
    constructor(private noteUseCase: INoteUseCase) {}
}

export default NoteController;
