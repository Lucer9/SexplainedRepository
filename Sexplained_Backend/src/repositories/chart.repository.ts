import {DefaultCrudRepository} from '@loopback/repository';
import {Chart, ChartRelations} from '../models';
import {MongoDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ChartRepository extends DefaultCrudRepository<
  Chart,
  typeof Chart.prototype.id,
  ChartRelations
> {
  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource,
  ) {
    super(Chart, dataSource);
  }
}
