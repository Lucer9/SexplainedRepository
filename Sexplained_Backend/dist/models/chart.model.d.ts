import { Entity } from '@loopback/repository';
export declare class Chart extends Entity {
    id?: string;
    name: string;
    visits: number;
    sales: number;
    earnings: number;
    color: string;
    type: string;
    constructor(data?: Partial<Chart>);
}
export interface ChartRelations {
}
export declare type ChartWithRelations = Chart & ChartRelations;
