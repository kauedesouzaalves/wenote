import { IPostgreNoteRepository } from "@/repositories/PostgreNoteRepository";

export interface INoteUseCase {}

class NoteUseCase implements INoteUseCase {
    constructor(private noteRepository: IPostgreNoteRepository) {}
}

export default NoteUseCase;
