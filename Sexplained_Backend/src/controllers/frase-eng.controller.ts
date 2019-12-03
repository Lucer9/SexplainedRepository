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
import {FrasesEng} from '../models';
import {FrasesEngRepository} from '../repositories';

export class FraseEngController {
  constructor(
    @repository(FrasesEngRepository)
    public frasesEngRepository : FrasesEngRepository,
  ) {}

  @post('/frases_eng', {
    responses: {
      '200': {
        description: 'FrasesEng model instance',
        content: {'application/json': {schema: getModelSchemaRef(FrasesEng)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FrasesEng, {
            title: 'NewFrasesEng',
            exclude: ['id'],
          }),
        },
      },
    })
    frasesEng: Omit<FrasesEng, 'id'>,
  ): Promise<FrasesEng> {
    return this.frasesEngRepository.create(frasesEng);
  }

  @get('/frases_eng/count', {
    responses: {
      '200': {
        description: 'FrasesEng model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(FrasesEng)) where?: Where<FrasesEng>,
  ): Promise<Count> {
    return this.frasesEngRepository.count(where);
  }

  @get('/frases_eng', {
    responses: {
      '200': {
        description: 'Array of FrasesEng model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(FrasesEng)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(FrasesEng)) filter?: Filter<FrasesEng>,
  ): Promise<FrasesEng[]> {
    return this.frasesEngRepository.find(filter);
  }

  @patch('/frases_eng', {
    responses: {
      '200': {
        description: 'FrasesEng PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FrasesEng, {partial: true}),
        },
      },
    })
    frasesEng: FrasesEng,
    @param.query.object('where', getWhereSchemaFor(FrasesEng)) where?: Where<FrasesEng>,
  ): Promise<Count> {
    return this.frasesEngRepository.updateAll(frasesEng, where);
  }

  @get('/frases_eng/{id}', {
    responses: {
      '200': {
        description: 'FrasesEng model instance',
        content: {'application/json': {schema: getModelSchemaRef(FrasesEng)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<FrasesEng> {
    return this.frasesEngRepository.findById(id);
  }

  @patch('/frases_eng/{id}', {
    responses: {
      '204': {
        description: 'FrasesEng PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FrasesEng, {partial: true}),
        },
      },
    })
    frasesEng: FrasesEng,
  ): Promise<void> {
    await this.frasesEngRepository.updateById(id, frasesEng);
  }

  @put('/frases_eng/{id}', {
    responses: {
      '204': {
        description: 'FrasesEng PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() frasesEng: FrasesEng,
  ): Promise<void> {
    await this.frasesEngRepository.replaceById(id, frasesEng);
  }

  @del('/frases_eng/{id}', {
    responses: {
      '204': {
        description: 'FrasesEng DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.frasesEngRepository.deleteById(id);
  }
}
