import { Entity } from '@loopback/repository';
export declare class Module extends Entity {
    id?: string;
    title: string;
    date: string;
    banner: string;
    authorId: string;
    price: number;
    content: object;
    constructor(data?: Partial<Module>);
}
export interface ModuleRelations {
}
export declare type ModuleWithRelations = Module & ModuleRelations;
