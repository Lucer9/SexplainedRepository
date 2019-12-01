import { DefaultCrudRepository } from '@loopback/repository';
import { Prueba, PruebaRelations } from '../models';
import { MongoDbDataSource } from '../datasources';
export declare class PruebaRepository extends DefaultCrudRepository<Prueba, typeof Prueba.prototype.id, PruebaRelations> {
    constructor(dataSource: MongoDbDataSource);
}
