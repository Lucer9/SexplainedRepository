import {DefaultCrudRepository} from '@loopback/repository';
import {FrasesEng, FrasesEngRelations} from '../models';
import {MongoDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FrasesEngRepository extends DefaultCrudRepository<
  FrasesEng,
  typeof FrasesEng.prototype.id,
  FrasesEngRelations
> {
  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource,
  ) {
    super(FrasesEng, dataSource);
  }
}
