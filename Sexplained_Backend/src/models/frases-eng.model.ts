import {model, property} from '@loopback/repository';
import {Frase} from '.';

@model()
export class FrasesEng extends Frase {

  constructor(data?: Partial<FrasesEng>) {
    super(data);
  }
}

export interface FrasesEngRelations {
  // describe navigational properties here
}

export type FrasesEngWithRelations = FrasesEng & FrasesEngRelations;
