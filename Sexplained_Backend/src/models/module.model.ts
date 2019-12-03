import {Entity, model, property} from '@loopback/repository';

@model()
export class Module extends Entity {
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
    type: 'string',
    required: true,
  })
  text: string;

  @property({
    type: 'string',
    required: true,
  })
  date: string;

  @property({
    type: 'string',
    required: true,
  })
  banner: string;

  @property({
    type: 'object',
    required: true,
  })
  author: object;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  price: number;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
   content?: object[];


  constructor(data?: Partial<Module>) {
    super(data);
  }
}

export interface ModuleRelations {
  // describe navigational properties here
}

export type ModuleWithRelations = Module & ModuleRelations;
