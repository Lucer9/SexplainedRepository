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
let PruebaController = class PruebaController {
    constructor(pruebaRepository) {
        this.pruebaRepository = pruebaRepository;
    }
    async create(prueba) {
        return this.pruebaRepository.create(prueba);
    }
    async count(where) {
        return this.pruebaRepository.count(where);
    }
    async find(filter) {
        return this.pruebaRepository.find(filter);
    }
    async updateAll(prueba, where) {
        return this.pruebaRepository.updateAll(prueba, where);
    }
    async findById(id) {
        return this.pruebaRepository.findById(id);
    }
    async updateById(id, prueba) {
        await this.pruebaRepository.updateById(id, prueba);
    }
    async replaceById(id, prueba) {
        await this.pruebaRepository.replaceById(id, prueba);
    }
    async deleteById(id) {
        await this.pruebaRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/pruebas', {
        responses: {
            '200': {
                description: 'Prueba model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Prueba) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Prueba, {
                    title: 'NewPrueba',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PruebaController.prototype, "create", null);
__decorate([
    rest_1.get('/pruebas/count', {
        responses: {
            '200': {
                description: 'Prueba model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Prueba))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PruebaController.prototype, "count", null);
__decorate([
    rest_1.get('/pruebas', {
        responses: {
            '200': {
                description: 'Array of Prueba model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Prueba) },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Prueba))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PruebaController.prototype, "find", null);
__decorate([
    rest_1.patch('/pruebas', {
        responses: {
            '200': {
                description: 'Prueba PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Prueba, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Prueba))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Prueba, Object]),
    __metadata("design:returntype", Promise)
], PruebaController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/pruebas/{id}', {
        responses: {
            '200': {
                description: 'Prueba model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Prueba) } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PruebaController.prototype, "findById", null);
__decorate([
    rest_1.patch('/pruebas/{id}', {
        responses: {
            '204': {
                description: 'Prueba PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Prueba, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Prueba]),
    __metadata("design:returntype", Promise)
], PruebaController.prototype, "updateById", null);
__decorate([
    rest_1.put('/pruebas/{id}', {
        responses: {
            '204': {
                description: 'Prueba PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Prueba]),
    __metadata("design:returntype", Promise)
], PruebaController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/pruebas/{id}', {
        responses: {
            '204': {
                description: 'Prueba DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PruebaController.prototype, "deleteById", null);
PruebaController = __decorate([
    __param(0, repository_1.repository(repositories_1.PruebaRepository)),
    __metadata("design:paramtypes", [repositories_1.PruebaRepository])
], PruebaController);
exports.PruebaController = PruebaController;
//# sourceMappingURL=prueba.controller.js.map