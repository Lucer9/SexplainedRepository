import {Entity, model, property} from '@loopback/repository';

@model()
export class Chart extends Entity {
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
  name: string;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  visits: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  sales: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  earnings: number;

  @property({
    type: 'string',
    required: true,
  })
  color: string;

  @property({
    type: 'string',
    required: true,
  })
  type: string;


  constructor(data?: Partial<Chart>) {
    super(data);
  }
}

export interface ChartRelations {
  // describe navigational properties here
}

export type ChartWithRelations = Chart & ChartRelations;
