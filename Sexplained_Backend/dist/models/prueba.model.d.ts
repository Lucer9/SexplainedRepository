import { Entity } from '@loopback/repository';
export declare class Prueba extends Entity {
    id?: number;
    title: string;
    constructor(data?: Partial<Prueba>);
}
export interface PruebaRelations {
}
export declare type PruebaWithRelations = Prueba & PruebaRelations;
