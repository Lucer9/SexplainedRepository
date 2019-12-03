import { Entity } from '@loopback/repository';
export declare class Frase extends Entity {
    id?: string;
    frase: string;
    autor: string;
    constructor(data?: Partial<Frase>);
}
export interface FraseRelations {
}
export declare type FraseWithRelations = Frase & FraseRelations;
