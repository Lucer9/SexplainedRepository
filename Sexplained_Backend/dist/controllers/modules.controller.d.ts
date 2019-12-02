import { Count, Filter, Where } from '@loopback/repository';
import { Module } from '../models';
import { ModuleRepository } from '../repositories';
export declare class ModulesController {
    moduleRepository: ModuleRepository;
    constructor(moduleRepository: ModuleRepository);
    create(module: Omit<Module, 'id'>): Promise<Module>;
    count(where?: Where<Module>): Promise<Count>;
    find(filter?: Filter<Module>): Promise<Module[]>;
    updateAll(module: Module, where?: Where<Module>): Promise<Count>;
    findById(id: string): Promise<Module>;
    updateById(id: string, module: Module): Promise<void>;
    replaceById(id: string, module: Module): Promise<void>;
    deleteById(id: string): Promise<void>;
}
