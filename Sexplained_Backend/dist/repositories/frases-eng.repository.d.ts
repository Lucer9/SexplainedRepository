import { DefaultCrudRepository } from '@loopback/repository';
import { FrasesEng, FrasesEngRelations } from '../models';
import { MongoDbDataSource } from '../datasources';
export declare class FrasesEngRepository extends DefaultCrudRepository<FrasesEng, typeof FrasesEng.prototype.id, FrasesEngRelations> {
    constructor(dataSource: MongoDbDataSource);
}
