import { IPostgreDirectoryRepository } from "@/repositories/PostgreDirectoryRepository";

export interface IDirectoryUseCase {}

class DirectoryUseCase implements IDirectoryUseCase {
    constructor(private directoryRepository: IPostgreDirectoryRepository) {}
}

export default DirectoryUseCase;
