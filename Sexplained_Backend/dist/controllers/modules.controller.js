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
let ModulesController = class ModulesController {
    constructor(moduleRepository) {
        this.moduleRepository = moduleRepository;
    }
    async create(module) {
        return this.moduleRepository.create(module);
    }
    async count(where) {
        return this.moduleRepository.count(where);
    }
    async find(filter) {
        return this.moduleRepository.find(filter);
    }
    async updateAll(module, where) {
        return this.moduleRepository.updateAll(module, where);
    }
    async findById(id) {
        return this.moduleRepository.findById(id);
    }
    async updateById(id, module) {
        await this.moduleRepository.updateById(id, module);
    }
    async replaceById(id, module) {
        await this.moduleRepository.replaceById(id, module);
    }
    async deleteById(id) {
        await this.moduleRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/modules', {
        responses: {
            '200': {
                description: 'Module model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Module) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Module, {
                    title: 'NewModule',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ModulesController.prototype, "create", null);
__decorate([
    rest_1.get('/modules/count', {
        responses: {
            '200': {
                description: 'Module model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Module))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ModulesController.prototype, "count", null);
__decorate([
    rest_1.get('/modules', {
        responses: {
            '200': {
                description: 'Array of Module model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Module) },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Module))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ModulesController.prototype, "find", null);
__decorate([
    rest_1.patch('/modules', {
        responses: {
            '200': {
                description: 'Module PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Module, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Module))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Module, Object]),
    __metadata("design:returntype", Promise)
], ModulesController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/modules/{id}', {
        responses: {
            '200': {
                description: 'Module model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Module) } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModulesController.prototype, "findById", null);
__decorate([
    rest_1.patch('/modules/{id}', {
        responses: {
            '204': {
                description: 'Module PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Module, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Module]),
    __metadata("design:returntype", Promise)
], ModulesController.prototype, "updateById", null);
__decorate([
    rest_1.put('/modules/{id}', {
        responses: {
            '204': {
                description: 'Module PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Module]),
    __metadata("design:returntype", Promise)
], ModulesController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/modules/{id}', {
        responses: {
            '204': {
                description: 'Module DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModulesController.prototype, "deleteById", null);
ModulesController = __decorate([
    __param(0, repository_1.repository(repositories_1.ModuleRepository)),
    __metadata("design:paramtypes", [repositories_1.ModuleRepository])
], ModulesController);
exports.ModulesController = ModulesController;
//# sourceMappingURL=modules.controller.js.map