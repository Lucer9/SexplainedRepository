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
            },{
                'id': "5",
                'banner': "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/114292.jpg",
                'title': "No Rompas Mas",
                'text': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                'date': "15/12/2019",
                'author': {
                    'id': "1",
                    'name': "Dr. Psiquiatra",
                    'avatar': "https://pbs.twimg.com/profile_images/771507219200249857/KQS3A75E.jpg"
                }
            }
            ];

        return {
            cards
        };

    }
}