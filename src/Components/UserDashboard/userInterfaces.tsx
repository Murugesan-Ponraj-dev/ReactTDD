export interface IBaseUser {
    name: string;
    role: string;
    description: string;
}

export  interface IUser extends IBaseUser {
    id: number;
}