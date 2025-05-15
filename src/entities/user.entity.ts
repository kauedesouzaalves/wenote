interface IUserEntity {
    id: string;
    username: string;
    displayName: string;
    email: string;
    password: string;
    notes: Array<any>; // Alterar para um array de Note
    createdAt: Date;
    updatedAt: Date;
}

class UserEntity implements IUserEntity {
    id: string;
    username: string;
    displayName: string;
    email: string;
    password: string;
    notes: any[];
    createdAt: Date;
    updatedAt: Date;

    constructor(userProps: IUserEntity) {
        this.id = userProps.id;
        this.username = userProps.username;
        this.displayName = userProps.displayName;
        this.email = userProps.email;
        this.password = userProps.password;
        this.notes = userProps.notes;
        this.createdAt = userProps.createdAt;
        this.updatedAt = userProps.updatedAt;
    }

    addNote () {

    }


}

export default UserEntity;
