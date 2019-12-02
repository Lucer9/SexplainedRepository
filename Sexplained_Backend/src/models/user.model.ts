import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
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
    type: 'string',
    required: true,
  })
  mail: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  type: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  bought_modules?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  cart?: string[];

  @property({
    type: 'string',
  })
  phone?: string;

  @property({
    type: 'string',
  })
  avatar?: string;

  @property({
    type: 'string',
  })
  info?: string;

  @property({
    type: 'string',
  })
  banner?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  modules?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  surveys?: string[];


  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
