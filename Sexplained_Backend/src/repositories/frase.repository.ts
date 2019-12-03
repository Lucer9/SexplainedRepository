import {DefaultCrudRepository} from '@loopback/repository';
import {Frase, FraseRelations} from '../models';
import {MongoDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FraseRepository extends DefaultCrudRepository<
  Frase,
  typeof Frase.prototype.id,
  FraseRelations
> {
  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource,
  ) {
    super(Frase, dataSource);
  }
}
