import {DefaultCrudRepository} from '@loopback/repository';
import {Prueba, PruebaRelations} from '../models';
import {MongoDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PruebaRepository extends DefaultCrudRepository<
  Prueba,
  typeof Prueba.prototype.id,
  PruebaRelations
> {
  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource,
  ) {
    super(Prueba, dataSource);
  }
}
