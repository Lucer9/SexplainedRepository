import { DefaultCrudRepository } from '@loopback/repository';
import { Module, ModuleRelations } from '../models';
import { MongoDbDataSource } from '../datasources';
export declare class ModuleRepository extends DefaultCrudRepository<Module, typeof Module.prototype.id, ModuleRelations> {
    constructor(dataSource: MongoDbDataSource);
}
