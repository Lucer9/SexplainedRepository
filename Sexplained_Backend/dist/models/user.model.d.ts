import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: string;
    name: string;
    mail: string;
    password: string;
    type: string;
    bought_modules?: string[];
    cart?: string[];
    phone?: string;
    avatar?: string;
    info?: string;
    banner?: string;
    modules?: string[];
    surveys?: string[];
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
