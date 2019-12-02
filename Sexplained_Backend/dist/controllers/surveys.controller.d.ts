import { Count, Filter, Where } from '@loopback/repository';
import { Survey } from '../models';
import { SurveyRepository } from '../repositories';
export declare class SurveysController {
    surveyRepository: SurveyRepository;
    constructor(surveyRepository: SurveyRepository);
    create(survey: Omit<Survey, 'id'>): Promise<Survey>;
    count(where?: Where<Survey>): Promise<Count>;
    find(filter?: Filter<Survey>): Promise<Survey[]>;
    updateAll(survey: Survey, where?: Where<Survey>): Promise<Count>;
    findById(id: string): Promise<Survey>;
    updateById(id: string, survey: Survey): Promise<void>;
    replaceById(id: string, survey: Survey): Promise<void>;
    deleteById(id: string): Promise<void>;
}
