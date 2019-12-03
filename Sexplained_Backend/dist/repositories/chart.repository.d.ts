import { DefaultCrudRepository } from '@loopback/repository';
import { Chart, ChartRelations } from '../models';
import { MongoDbDataSource } from '../datasources';
export declare class ChartRepository extends DefaultCrudRepository<Chart, typeof Chart.prototype.id, ChartRelations> {
    constructor(dataSource: MongoDbDataSource);
}
