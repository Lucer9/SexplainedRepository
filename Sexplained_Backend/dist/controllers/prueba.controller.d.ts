import { Count, Filter, Where } from '@loopback/repository';
import { Prueba } from '../models';
import { PruebaRepository } from '../repositories';
export declare class PruebaController {
    pruebaRepository: PruebaRepository;
    constructor(pruebaRepository: PruebaRepository);
    create(prueba: Omit<Prueba, 'id'>): Promise<Prueba>;
    count(where?: Where<Prueba>): Promise<Count>;
    find(filter?: Filter<Prueba>): Promise<Prueba[]>;
    updateAll(prueba: Prueba, where?: Where<Prueba>): Promise<Count>;
    findById(id: number): Promise<Prueba>;
    updateById(id: number, prueba: Prueba): Promise<void>;
    replaceById(id: number, prueba: Prueba): Promise<void>;
    deleteById(id: number): Promise<void>;
}
