interface INoteEntity {
    title: string;
    description: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    owner: any; // Alterar para User
    viewing: any[]; // Alterar para um array de User
    impressions: number;
    parent: any; // Alterar para Repository
}

class NoteEntity implements INoteEntity {
    title: string;
    description: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    owner: any;
    viewing: any[];
    impressions: number;
    parent: any;

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
