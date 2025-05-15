interface IDirectoryEntity {
    name: string;
    childrens: Array<any | any>; // Alterar para Directory e Note
    createdAt: Date;
    updatedAt: Date;
}

class DirectoryEntity implements IDirectoryEntity {
    name: string;
    childrens: any[];
    createdAt: Date;
    updatedAt: Date;

    constructor(dirProps: IDirectoryEntity) {
        this.name = dirProps.name;
        this.childrens = dirProps.childrens;
        this.createdAt = dirProps.createdAt;
        this.updatedAt = dirProps.updatedAt;
    }
}
