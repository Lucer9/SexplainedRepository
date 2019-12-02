import {DefaultCrudRepository} from '@loopback/repository';
import {Survey, SurveyRelations} from '../models';
import {MongoDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SurveyRepository extends DefaultCrudRepository<
  Survey,
  typeof Survey.prototype.id,
  SurveyRelations
> {
  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource,
  ) {
    super(Survey, dataSource);
  }
}
