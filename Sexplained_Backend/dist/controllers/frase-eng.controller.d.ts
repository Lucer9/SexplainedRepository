import { Count, Filter, Where } from '@loopback/repository';
import { FrasesEng } from '../models';
import { FrasesEngRepository } from '../repositories';
export declare class FraseEngController {
    frasesEngRepository: FrasesEngRepository;
    constructor(frasesEngRepository: FrasesEngRepository);
    create(frasesEng: Omit<FrasesEng, 'id'>): Promise<FrasesEng>;
    count(where?: Where<FrasesEng>): Promise<Count>;
    find(filter?: Filter<FrasesEng>): Promise<FrasesEng[]>;
    updateAll(frasesEng: FrasesEng, where?: Where<FrasesEng>): Promise<Count>;
    findById(id: string): Promise<FrasesEng>;
    updateById(id: string, frasesEng: FrasesEng): Promise<void>;
    replaceById(id: string, frasesEng: FrasesEng): Promise<void>;
    deleteById(id: string): Promise<void>;
}
