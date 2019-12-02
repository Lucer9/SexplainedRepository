"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SurveysController = class SurveysController {
    constructor(surveyRepository) {
        this.surveyRepository = surveyRepository;
    }
    async create(survey) {
        return this.surveyRepository.create(survey);
    }
    async count(where) {
        return this.surveyRepository.count(where);
    }
    async find(filter) {
        return this.surveyRepository.find(filter);
    }
    async updateAll(survey, where) {
        return this.surveyRepository.updateAll(survey, where);
    }
    async findById(id) {
        return this.surveyRepository.findById(id);
    }
    async updateById(id, survey) {
        await this.surveyRepository.updateById(id, survey);
    }
    async replaceById(id, survey) {
        await this.surveyRepository.replaceById(id, survey);
    }
    async deleteById(id) {
        await this.surveyRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/surveys', {
        responses: {
            '200': {
                description: 'Survey model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Survey) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Survey, {
                    title: 'NewSurvey',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SurveysController.prototype, "create", null);
__decorate([
    rest_1.get('/surveys/count', {
        responses: {
            '200': {
                description: 'Survey model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Survey))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SurveysController.prototype, "count", null);
__decorate([
    rest_1.get('/surveys', {
        responses: {
            '200': {
                description: 'Array of Survey model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Survey) },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Survey))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SurveysController.prototype, "find", null);
__decorate([
    rest_1.patch('/surveys', {
        responses: {
            '200': {
                description: 'Survey PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Survey, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Survey))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Survey, Object]),
    __metadata("design:returntype", Promise)
], SurveysController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/surveys/{id}', {
        responses: {
            '200': {
                description: 'Survey model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Survey) } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SurveysController.prototype, "findById", null);
__decorate([
    rest_1.patch('/surveys/{id}', {
        responses: {
            '204': {
                description: 'Survey PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Survey, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Survey]),
    __metadata("design:returntype", Promise)
], SurveysController.prototype, "updateById", null);
__decorate([
    rest_1.put('/surveys/{id}', {
        responses: {
            '204': {
                description: 'Survey PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Survey]),
    __metadata("design:returntype", Promise)
], SurveysController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/surveys/{id}', {
        responses: {
            '204': {
                description: 'Survey DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SurveysController.prototype, "deleteById", null);
SurveysController = __decorate([
    __param(0, repository_1.repository(repositories_1.SurveyRepository)),
    __metadata("design:paramtypes", [repositories_1.SurveyRepository])
], SurveysController);
exports.SurveysController = SurveysController;
//# sourceMappingURL=surveys.controller.js.map