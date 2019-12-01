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
import {Prueba} from '../models';
import {PruebaRepository} from '../repositories';

export class PruebaController {
  constructor(
    @repository(PruebaRepository)
    public pruebaRepository : PruebaRepository,
  ) {}

  @post('/pruebas', {
    responses: {
      '200': {
        description: 'Prueba model instance',
        content: {'application/json': {schema: getModelSchemaRef(Prueba)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Prueba, {
            title: 'NewPrueba',
            exclude: ['id'],
          }),
        },
      },
    })
    prueba: Omit<Prueba, 'id'>,
  ): Promise<Prueba> {
    return this.pruebaRepository.create(prueba);
  }

  @get('/pruebas/count', {
    responses: {
      '200': {
        description: 'Prueba model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Prueba)) where?: Where<Prueba>,
  ): Promise<Count> {
    return this.pruebaRepository.count(where);
  }

  @get('/pruebas', {
    responses: {
      '200': {
        description: 'Array of Prueba model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Prueba)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Prueba)) filter?: Filter<Prueba>,
  ): Promise<Prueba[]> {
    return this.pruebaRepository.find(filter);
  }

  @patch('/pruebas', {
    responses: {
      '200': {
        description: 'Prueba PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Prueba, {partial: true}),
        },
      },
    })
    prueba: Prueba,
    @param.query.object('where', getWhereSchemaFor(Prueba)) where?: Where<Prueba>,
  ): Promise<Count> {
    return this.pruebaRepository.updateAll(prueba, where);
  }

  @get('/pruebas/{id}', {
    responses: {
      '200': {
        description: 'Prueba model instance',
        content: {'application/json': {schema: getModelSchemaRef(Prueba)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Prueba> {
    return this.pruebaRepository.findById(id);
  }

  @patch('/pruebas/{id}', {
    responses: {
      '204': {
        description: 'Prueba PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Prueba, {partial: true}),
        },
      },
    })
    prueba: Prueba,
  ): Promise<void> {
    await this.pruebaRepository.updateById(id, prueba);
  }

  @put('/pruebas/{id}', {
    responses: {
      '204': {
        description: 'Prueba PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() prueba: Prueba,
  ): Promise<void> {
    await this.pruebaRepository.replaceById(id, prueba);
  }

  @del('/pruebas/{id}', {
    responses: {
      '204': {
        description: 'Prueba DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pruebaRepository.deleteById(id);
  }
}
