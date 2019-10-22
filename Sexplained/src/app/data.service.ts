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
        let cards = [{
                'id': "1",
                'banner': "http://s3.amazonaws.com/static.hivequal.org/files/photos/4931/images/large.jpg?1505243628",
                'title': "¿Comó poner un cóndon?",
                'text': "Se denomina embarazo, gestación, preñez o gravidez al periodo que transcurre desde la implantación del óvulo fecundado en el útero hasta el momento del parto. ... En el embarazo humano la gestación suele ser única, sin embargo pueden producirse embarazos múltiples.",
                'date': "12/09/2019",
                'author': {
                    'id': "1",
                    'name': "Dr. Harold",
                    'avatar': "https://thumbs.dreamstime.com/z/senior-doctor-holding-papers-smiling-23096004.jpg"
                }
            }
            ];

        return {
            cards
        };

    }
}