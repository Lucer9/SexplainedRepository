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
let FraseController = class FraseController {
    constructor(fraseRepository) {
        this.fraseRepository = fraseRepository;
    }
    async create(frase) {
        return this.fraseRepository.create(frase);
    }
    async count(where) {
        return this.fraseRepository.count(where);
    }
    async find(filter) {
        return this.fraseRepository.find(filter);
    }
    async updateAll(frase, where) {
        return this.fraseRepository.updateAll(frase, where);
    }
    async findById(id) {
        return this.fraseRepository.findById(id);
    }
    async updateById(id, frase) {
        await this.fraseRepository.updateById(id, frase);
    }
    async replaceById(id, frase) {
        await this.fraseRepository.replaceById(id, frase);
    }
    async deleteById(id) {
        await this.fraseRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/frases', {
        responses: {
            '200': {
                description: 'Frase model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Frase) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Frase, {
                    title: 'NewFrase',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FraseController.prototype, "create", null);
__decorate([
    rest_1.get('/frases/count', {
        responses: {
            '200': {
                description: 'Frase model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Frase))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FraseController.prototype, "count", null);
__decorate([
    rest_1.get('/frases', {
        responses: {
            '200': {
                description: 'Array of Frase model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Frase) },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Frase))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FraseController.prototype, "find", null);
__decorate([
    rest_1.patch('/frases', {
        responses: {
            '200': {
                description: 'Frase PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Frase, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Frase))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Frase, Object]),
    __metadata("design:returntype", Promise)
], FraseController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/frases/{id}', {
        responses: {
            '200': {
                description: 'Frase model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Frase) } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FraseController.prototype, "findById", null);
__decorate([
    rest_1.patch('/frases/{id}', {
        responses: {
            '204': {
                description: 'Frase PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Frase, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Frase]),
    __metadata("design:returntype", Promise)
], FraseController.prototype, "updateById", null);
__decorate([
    rest_1.put('/frases/{id}', {
        responses: {
            '204': {
                description: 'Frase PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Frase]),
    __metadata("design:returntype", Promise)
], FraseController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/frases/{id}', {
        responses: {
            '204': {
                description: 'Frase DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FraseController.prototype, "deleteById", null);
FraseController = __decorate([
    __param(0, repository_1.repository(repositories_1.FraseRepository)),
    __metadata("design:paramtypes", [repositories_1.FraseRepository])
], FraseController);
exports.FraseController = FraseController;
//# sourceMappingURL=frase.controller.js.map