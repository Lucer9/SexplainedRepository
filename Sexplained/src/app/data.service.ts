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
        let surveys = [{
                'id': "1",
                'people': 47,
                'banner': "https://www.merca2.es/wp-content/uploads/2017/09/vida-sexual-activa-2.jpg",
                'title': "Vida Sexual",
                'text': "Ser sano sexualmente significa cuidar tu salud emocional y física mediante la práctica de sexo más seguro y estando cómodo con tu cuerpo, tu sexualidad y tus relaciones.",
                'date': "10/04/2019",
                'author': {
                    'id': "1",
                    'name': "Dr. Harold",
                    'avatar': "https://thumbs.dreamstime.com/z/senior-doctor-holding-papers-smiling-23096004.jpg"
                },
                'content':[
                    {'type':'input','pregunta':'Input', 'data':'Hay que sad'},
                    {'type':'checkbox','pregunta':'Checkbox','data':["Hola","Adios"]},
                    {'type':'radio','pregunta':'Radial','data':["Hola","Adios"]},
                    {'type':'radio','pregunta':'Radial2','data':["Hola","Adios"]},
                    {'type':'radio','pregunta':'Radial3','data':["Hola","Adios"]},
                    {'type':'textarea','pregunta':'Textarea', 'data':'Textarea'},
                ]
            }]
        let cards = [{
                'id': "1",
                'price': 0,
                'banner': "http://s3.amazonaws.com/static.hivequal.org/files/photos/4931/images/large.jpg?1505243628",
                'title': "¿Comó poner un cóndon?",
                'text': "Hay muchos mitos que rodean los principales aspectos una relación sexual. Algunos otros son simplemente tabu, en la isguiente lección el Doctor Harold te enseñara la importancia de los preservativos y su correcto uso al momento del acto sexual, para encontrarse preparado cuando el momento de la verdad llegue.",
                'date': "10/04/2019",
                'author': {
                    'id': "1",
                    'name': "Dr. Harold",
                    'avatar': "https://thumbs.dreamstime.com/z/senior-doctor-holding-papers-smiling-23096004.jpg"
                },
                'content':[
                    {'type':'title','data':'Capítulo 1'},
                    {'type':'text','data':'Hay muchos mitos que rodean los principales aspectos una relación sexual.'},                                    {'type':'list','data':["Punto 1","Punto 3","Punto 2"]},
                    {'type':'image','data':'http://s3.amazonaws.com/static.hivequal.org/files/photos/4931/images/large.jpg?1505243628'},
                ]
            },
            
            {
                'id': "2",
                'price': 50,
                'banner': "https://media.metrolatam.com/2019/07/10/screenshot201907-9deaa9f195426bc5ed25dacd32c27297-600x400.jpg",
                'title': "Pastillas Anticonceptivas",
                'text': "Mucha gente tiene ideas equivoacadas o hasta fantasiosas sobre las famosas pastillas anticonceptivas. A pesar de tratarse de un milagro médico del siglo XXI es importante saber de qué son capaces y a veces igual de importante de qué NO son capaces. La Dra. Martinez, especialista, refuerz y desmiente mucha de la información que circula sobre las mágicas pastillas.",
                'date': "03/09/2019",
                'author': {
                    'id': "2",
                    'name': "Dra. Martinez",
                    'avatar': "https://saludclubdeleones.com/wp-content/uploads/2014/07/doc6-300x300.png"
                }
            },
            
             {
                'id': "3",
                'price': 75,
                'banner': "http://i.espectaculos.televisa.com/2017/10/istock-504309660.jpg",
                'title': "Embarazo",
                'text': "Se denomina embarazo, gestación, preñez o gravidez al periodo que transcurre desde la implantación del óvulo fecundado en el útero hasta el momento del parto. ... En el embarazo humano la gestación suele ser única, sin embargo pueden producirse embarazos múltiples.",
                'date': "14/02/2019",
                'author': {
                    'id': "3",
                    'name': "Dr. Antonio",
                    'avatar': "https://img3.stockfresh.com/files/l/lisafx/m/48/209214_stock-photo-doctor---face-of-experience.jpg"
                }
            },
            
            {
                'id': "4",
                'price': 0,
                'banner': "https://www.insideedition.com/sites/default/files/styles/content_full/public/images/2018-06/istock-829471540.jpg?itok=6P3BxAyN",
                'title': "¿El tamaño importa?",
                'text': "La pregunta eterna. Se ha mantenido en la cabeza de todo primerizo (y no tan primerizo) en su vida sexual, pero ¿cuánta importancia tiene en realidad este hechp? ¿Vale la pena siquiera discutirlo? La Doctora Martinez atiende a la duda existencial de mucho y la importancia de discutirlo.",
                'date': "26/08/2019",
                'author': {
                    'id': "2",
                    'name': "Dra. Martinez",
                    'avatar': "https://saludclubdeleones.com/wp-content/uploads/2014/07/doc6-300x300.png"
                }
            },
            
            {
                'id': "5",
                'price': 0,
                'banner': "https://cf.ltkcdn.net/pregnancy/images/std/210579-766x450-Woman-showing-condom.jpg",
                'title': "Con condón no se siente",
                'text': "Hay aún mucha desinformación sobre el uso de métodos anticonceptivos y sus consecuencias en el acto sexual. Sin embargo, muchos de ellos resultan falsos y atender a ellos es la tarea que el Doctor Antonio se ha impuesto. Solucionar tus dudas sobre el uso de condón en una relación sexual y la improtancia del cuidado de uno mismo y de la pareja.",
                'date': "30/07/2019",
                'author': {
                    'id': "3",
                    'name': "Dr. Antonio",
                    'avatar': "https://img3.stockfresh.com/files/l/lisafx/m/48/209214_stock-photo-doctor---face-of-experience.jpg"
                }
            },
            
            {
                'id': "6",
                'price': 25,
                'banner': "https://c8.alamy.com/compes/rg5wm8/malestar-hombre-haciendo-gestos-de-pensamiento-en-la-moderna-sala-de-estar-rg5wm8.jpg",
                'title': "'Acabar' afuera",
                'text': "Muchos dicen que lo vieron en un video, o en una página de consejos dudosos, o un amigo les contó que era un método que podía ser infalible si se sabía ejecutar en el momento correcto. El doctor Antonio revisa cada uno de estos argumentos y su nivel de realidad en un escenario real.",
                'date': "20/10/2019",
                'author': {
                    'id': "3",
                    'name': "Dr. Antonio",
                    'avatar': "https://img3.stockfresh.com/files/l/lisafx/m/48/209214_stock-photo-doctor---face-of-experience.jpg"
                }
            }
            ];

        return {
            cards, surveys
        };

    }
}