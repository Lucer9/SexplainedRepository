import {
    Injectable
} from '@angular/core';
import {
    InMemoryDbService
} from 'angular-in-memory-web-api'

@Injectable({
    providedIn: 'root'
})
export class DataService implements InMemoryDbService {

    constructor() {}
    createDb() {
        let charts = [
            {
                'id': "1",
                'title': 'Visitas',
                'atributo': 'visitas',
            },
            {
                'id': "2",
                'title': 'Compras',
                'atributo': 'compras'
            },
            {
                'id': "3",
                'title': 'Ganancias',
                'atributo': 'ganancias'
            }
        ]

        return {
            charts
        };

    }
}