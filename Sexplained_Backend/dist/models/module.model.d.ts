import { Entity } from '@loopback/repository';
export declare class Module extends Entity {
    id?: string;
    title: string;
    text: string;
    date: string;
    banner: string;
    author: object;
    price: number;
    sales: number;
    content?: object[];
    constructor(data?: Partial<Module>);
}
export interface ModuleRelations {
}
export declare type ModuleWithRelations = Module & ModuleRelations;
