import { IDirectoryUseCase } from "@/use-cases/DirectoryUseCase";

class DirectoryController {
    constructor(private directoryUseCase: IDirectoryUseCase) {}
}

export default DirectoryController;
