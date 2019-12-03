import { Count, Filter, Where } from '@loopback/repository';
import { Frase } from '../models';
import { FraseRepository } from '../repositories';
export declare class FraseController {
    fraseRepository: FraseRepository;
    constructor(fraseRepository: FraseRepository);
    create(frase: Omit<Frase, 'id'>): Promise<Frase>;
    count(where?: Where<Frase>): Promise<Count>;
    find(filter?: Filter<Frase>): Promise<Frase[]>;
    updateAll(frase: Frase, where?: Where<Frase>): Promise<Count>;
    findById(id: string): Promise<Frase>;
    updateById(id: string, frase: Frase): Promise<void>;
    replaceById(id: string, frase: Frase): Promise<void>;
    deleteById(id: string): Promise<void>;
}
