import { Entity } from '@loopback/repository';
export declare class Survey extends Entity {
    id?: string;
    title: string;
    text: string;
    date: string;
    banner: string;
    author: object;
    people: number;
    content?: object[];
    constructor(data?: Partial<Survey>);
}
export interface SurveyRelations {
}
export declare type SurveyWithRelations = Survey & SurveyRelations;
