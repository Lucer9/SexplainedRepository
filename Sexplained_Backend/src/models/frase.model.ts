import {Entity, model, property} from '@loopback/repository';

@model()
export class Frase extends Entity {
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
  frase: string;

  @property({
    type: 'string',
    required: true,
  })
  autor: string;


  constructor(data?: Partial<Frase>) {
    super(data);
  }
}

export interface FraseRelations {
  // describe navigational properties here
}

export type FraseWithRelations = Frase & FraseRelations;
