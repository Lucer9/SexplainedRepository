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
import {Survey} from '../models';
import {SurveyRepository} from '../repositories';

export class SurveysController {
  constructor(
    @repository(SurveyRepository)
    public surveyRepository : SurveyRepository,
  ) {}

  @post('/surveys', {
    responses: {
      '200': {
        description: 'Survey model instance',
        content: {'application/json': {schema: getModelSchemaRef(Survey)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Survey, {
            title: 'NewSurvey',
            exclude: ['id'],
          }),
        },
      },
    })
    survey: Omit<Survey, 'id'>,
  ): Promise<Survey> {
    return this.surveyRepository.create(survey);
  }

  @get('/surveys/count', {
    responses: {
      '200': {
        description: 'Survey model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Survey)) where?: Where<Survey>,
  ): Promise<Count> {
    return this.surveyRepository.count(where);
  }

  @get('/surveys', {
    responses: {
      '200': {
        description: 'Array of Survey model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Survey)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Survey)) filter?: Filter<Survey>,
  ): Promise<Survey[]> {
    return this.surveyRepository.find(filter);
  }

  @patch('/surveys', {
    responses: {
      '200': {
        description: 'Survey PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Survey, {partial: true}),
        },
      },
    })
    survey: Survey,
    @param.query.object('where', getWhereSchemaFor(Survey)) where?: Where<Survey>,
  ): Promise<Count> {
    return this.surveyRepository.updateAll(survey, where);
  }

  @get('/surveys/{id}', {
    responses: {
      '200': {
        description: 'Survey model instance',
        content: {'application/json': {schema: getModelSchemaRef(Survey)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Survey> {
    return this.surveyRepository.findById(id);
  }

  @patch('/surveys/{id}', {
    responses: {
      '204': {
        description: 'Survey PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Survey, {partial: true}),
        },
      },
    })
    survey: Survey,
  ): Promise<void> {
    await this.surveyRepository.updateById(id, survey);
  }

  @put('/surveys/{id}', {
    responses: {
      '204': {
        description: 'Survey PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() survey: Survey,
  ): Promise<void> {
    await this.surveyRepository.replaceById(id, survey);
  }

  @del('/surveys/{id}', {
    responses: {
      '204': {
        description: 'Survey DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.surveyRepository.deleteById(id);
  }
}
