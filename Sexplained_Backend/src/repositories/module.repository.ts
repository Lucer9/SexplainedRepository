import {DefaultCrudRepository} from '@loopback/repository';
import {Module, ModuleRelations} from '../models';
import {MongoDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ModuleRepository extends DefaultCrudRepository<
  Module,
  typeof Module.prototype.id,
  ModuleRelations
> {
  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource,
  ) {
    super(Module, dataSource);
  }
}
