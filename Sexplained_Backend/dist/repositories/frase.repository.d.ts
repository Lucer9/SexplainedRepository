import { DefaultCrudRepository } from '@loopback/repository';
import { Frase, FraseRelations } from '../models';
import { MongoDbDataSource } from '../datasources';
export declare class FraseRepository extends DefaultCrudRepository<Frase, typeof Frase.prototype.id, FraseRelations> {
    constructor(dataSource: MongoDbDataSource);
}
