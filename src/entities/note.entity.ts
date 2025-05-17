import { IDirectoryEntity } from "./directory.entity";
import { IUserEntity } from "./user.entity";

export interface INoteEntity {
    title: string;
    description: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    owner: IUserEntity;
    viewing: Array<IUserEntity>;
    impressions: number;
    parent: IDirectoryEntity | undefined;
}

class NoteEntity implements INoteEntity {
    title: string;
    description: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    owner: IUserEntity;
    viewing: Array<IUserEntity>;
    impressions: number;
    parent: IDirectoryEntity | undefined;

    constructor(noteProps: INoteEntity) {
        this.title = noteProps.title;
        this.description = noteProps.description;
        this.content = noteProps.content;
        this.createdAt = noteProps.createdAt;
        this.updatedAt = noteProps.updatedAt;
        this.owner = noteProps.owner;
        this.viewing = noteProps.viewing;
        this.impressions = noteProps.impressions;
        this.parent = noteProps.parent;
    }
}

export default NoteEntity;
