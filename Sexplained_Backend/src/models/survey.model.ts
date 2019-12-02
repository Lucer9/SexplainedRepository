import {Entity, model, property} from '@loopback/repository';

@model()
export class Survey extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'date',
    required: true,
    default: new Date,
  })
  date: string;

  @property({
    type: 'string',
    required: true,
  })
  banner: string;

  @property({
    type: 'string',
    required: true,
  })
  authorId: string;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  people: number;

  @property({
    type: 'object',
    required: true,
  })
  content: object;


  constructor(data?: Partial<Survey>) {
    super(data);
  }
}

export interface SurveyRelations {
  // describe navigational properties here
}

export type SurveyWithRelations = Survey & SurveyRelations;
