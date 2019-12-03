import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Frase} from '../models';
import {FraseRepository} from '../repositories';

export class FraseController {
  constructor(
    @repository(FraseRepository)
    public fraseRepository : FraseRepository,
  ) {}

  @post('/frases', {
    responses: {
      '200': {
        description: 'Frase model instance',
        content: {'application/json': {schema: getModelSchemaRef(Frase)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Frase, {
            title: 'NewFrase',
            exclude: ['id'],
          }),
        },
      },
    })
    frase: Omit<Frase, 'id'>,
  ): Promise<Frase> {
    return this.fraseRepository.create(frase);
  }

  @get('/frases/count', {
    responses: {
      '200': {
        description: 'Frase model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Frase)) where?: Where<Frase>,
  ): Promise<Count> {
    return this.fraseRepository.count(where);
  }

  @get('/frases', {
    responses: {
      '200': {
        description: 'Array of Frase model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Frase)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Frase)) filter?: Filter<Frase>,
  ): Promise<Frase[]> {
    return this.fraseRepository.find(filter);
  }

  @patch('/frases', {
    responses: {
      '200': {
        description: 'Frase PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Frase, {partial: true}),
        },
      },
    })
    frase: Frase,
    @param.query.object('where', getWhereSchemaFor(Frase)) where?: Where<Frase>,
  ): Promise<Count> {
    return this.fraseRepository.updateAll(frase, where);
  }

  @get('/frases/{id}', {
    responses: {
      '200': {
        description: 'Frase model instance',
        content: {'application/json': {schema: getModelSchemaRef(Frase)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Frase> {
    return this.fraseRepository.findById(id);
  }

  @patch('/frases/{id}', {
    responses: {
      '204': {
        description: 'Frase PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Frase, {partial: true}),
        },
      },
    })
    frase: Frase,
  ): Promise<void> {
    await this.fraseRepository.updateById(id, frase);
  }

  @put('/frases/{id}', {
    responses: {
      '204': {
        description: 'Frase PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() frase: Frase,
  ): Promise<void> {
    await this.fraseRepository.replaceById(id, frase);
  }

  @del('/frases/{id}', {
    responses: {
      '204': {
        description: 'Frase DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.fraseRepository.deleteById(id);
  }
}
