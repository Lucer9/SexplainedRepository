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
        let users = [{
            'id': "1",
            'name': "Carlos Aldama Jackson",
            'bought_modules': [3],
            'cart': [6, 2],
            'mail': "hola@hola.com",
            'password': "password"
        }]

        let admins = [{
            'id': "1",
            'name': "Dr. Harold",
            'modules': [1],
            'surveys': [1],
            'avatar': "https://thumbs.dreamstime.com/z/senior-doctor-holding-papers-smiling-23096004.jpg",
            'info': "PROFILE  State the type of job you are seeking and highlight several of your most important, impressive and marketable skills.  SUMMARY OF SKILLS  - Include your most marketable skills and accomplishments here. - Ensure the skills you list are relevant to the type of job you are seeking. - Be as specific as possible. - Ensure that this section is full of the keywords employers will likely use when sorting resumes. - If keywords are commonly stated more than on way, you must use both forms of the word (for example, Master of Business Administration and MBA)",
            'phone': "+521 7234789289",
            'mail': "drharold@gmail.com",
            'password': "password",
            'banner': "https://i.kym-cdn.com/photos/images/newsfeed/000/839/199/8a9.jpg"

        }, {
            'id': "2",
            'name': "Dra. Martinez",
            'modules': [2, 4],
            'surveys': [],
            'avatar': "https://saludclubdeleones.com/wp-content/uploads/2014/07/doc6-300x300.png",
            'info': "PROFILE  State the type of job you are seeking and highlight several of your most important, impressive and marketable skills.  SUMMARY OF SKILLS  - Include your most marketable skills and accomplishments here. - Ensure the skills you list are relevant to the type of job you are seeking. - Be as specific as possible. - Ensure that this section is full of the keywords employers will likely use when sorting resumes. - If keywords are commonly stated more than on way, you must use both forms of the word (for example, Master of Business Administration and MBA)",
            'phone': "+521 7327742783",
            'mail': "martinez@gmail.com",
            'password': "password",
            'banner': "https://i.ytimg.com/vi/K6LA7v1PApU/maxresdefault.jpg"

        }, {
            'id': "3",
            'name': "Dr. Antonio",
            'modules': [3, 5, 6],
            'surveys': [],
            'avatar': "https://img3.stockfresh.com/files/l/lisafx/m/48/209214_stock-photo-doctor---face-of-experience.jpg",
            'info': "PROFILE  State the type of job you are seeking and highlight several of your most important, impressive and marketable skills.  SUMMARY OF SKILLS  - Include your most marketable skills and accomplishments here. - Ensure the skills you list are relevant to the type of job you are seeking. - Be as specific as possible. - Ensure that this section is full of the keywords employers will likely use when sorting resumes. - If keywords are commonly stated more than on way, you must use both forms of the word (for example, Master of Business Administration and MBA)",
            'phone': "+521 5522994347",
            'mail': "drantonio@gmail.com",
            'mpassword': "password",
            'banner': "https://image.freepik.com/free-photo/pills-medical-equiupments-green-banner-background_8087-321.jpg"

        }]
        let surveys = [
            {
                'id': "11",
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
                'content': [
                    {
                        'type': 'input',
                        'pregunta': 'Ingrese su nombre de usuario',
                        'data': 'ElCrack69'
                        },
                    {
                        'type': 'radio',
                        'pregunta': 'Vida sexual es saludable es...',
                        'data': ["Cuidar tu salud emocional y física mediante la práctica de sexo más seguro y estando cómodo con tu cuerpo, tu sexualidad y tus relaciones.", "Es un país soberano insular del este de Asia. Situado en el océano Pacífico; tiene al oeste el mar del Japón, China, Corea del Norte, Corea del Sur y Rusia.", "Un conjunto descentralizado de redes de comunicación interconectadas que utilizan la familia de protocolos TCP/IP, lo cual garantiza que las redes físicas heterogéneas."]
                        },
                    {
                        'type': 'radio',
                        'pregunta': 'Pablito clavo un...',
                        'data': ["Tres tristes tigres", "Clavito", "Pica papas"]
                        },
                    {
                        'type': 'checkbox',
                        'pregunta': 'Las tres maldiciones imperdonables son:',
                        'data': ["Expelliarmus", "Avada Kedabra", "Crucio", "Desmaio", "Imperio", "Levicorpus"]
                        },
                    {
                        'type': 'Más vale pájaro en mano que...',
                        'pregunta': 'Radial',
                        'data': ["...uno como quiera", "...la puta al río", "...pájaro en mano"]
                        },
                    {
                        'type': 'textarea',
                        'pregunta': 'Opinión general del curso',
                        'data': 'Texto'
                        }
                ]
                },

            {
                'id': "12",
                'people': 343,
                'banner': "https://cde.laprensa.e3.pe/ima/0/0/2/1/8/218964.jpg",
                'title': "SexplainEd en Westeros",
                'text': "En la popular serie de HBO 'Game of Thrones' las series de violencia y sexo son algo de todos los episodios. Es importante recalcar la diferencia entre fantasía y realidad, en el siguiente quizz pon a prueba tu habilidad de recalcarlos.",
                'date': "12/10/2019",
                'author': {
                    'id': "3",
                    'name': "Dr. Antonio",
                    'avatar': "https://img3.stockfresh.com/files/l/lisafx/m/48/209214_stock-photo-doctor---face-of-experience.jpg"
                },
                'content': [
                    {
                        'type': 'input',
                        'pregunta': 'Ingrese su nombre de usuario',
                        'data': 'ElCrack69'
                        },
                    {
                        'type': 'checkbox',
                        'pregunta': 'Nombre de todos los hijos Stark',
                        'data': ["Robb", "Rhaegar", "Sansa", "Daenerys", "Jaime", "Cersei", "Arya", "Bran", "Tyrion", "Tywin", "Rickon"]
                        },
                    {
                        'type': 'radio',
                        'pregunta': '¿Quien fue el primer rey de los Siete Reinos?',
                        'data': ["Aegon", "Aerys"]
                        },
                    {
                        'type': 'radio',
                        'pregunta': 'Reino más grande en Westeros',
                        'data': ["Dorne", "Dominio", "Tierra de los Ríos", "El Norte", "Tierras de las Tormentas"]
                        },
                    {
                        'type': 'textarea',
                        'pregunta': 'Opinión general del curso',
                        'data': 'Texto'
                        },
                ]
                }]
        let cards = [{
                'id': "1",
                'price': 100,
                'banner': "http://s3.amazonaws.com/static.hivequal.org/files/photos/4931/images/large.jpg?1505243628",
                'title': "¿Comó poner un cóndon?",
                'text': "Hay muchos mitos que rodean los principales aspectos una relación sexual. Algunos otros son simplemente tabu, en la isguiente lección el Doctor Harold te enseñara la importancia de los preservativos y su correcto uso al momento del acto sexual, para encontrarse preparado cuando el momento de la verdad llegue.",
                'date': "10/04/2019",
                'author': {
                    'id': "1",
                    'name': "Dr. Harold",
                    'avatar': "https://thumbs.dreamstime.com/z/senior-doctor-holding-papers-smiling-23096004.jpg"
                },
                'content': [
                    {
                        'type': 'title',
                        'data': 'Capítulo 1'
                    },
                    {
                        'type': 'text',
                        'data': 'Sin sombrero no hay vaquero... Una lección del doctor Harold'
                    }, {
                        'type': 'list',
                        'data': ["—Deberíamos volver ya —instó Gared mientras los bosques se tornaban más y más oscuros a su alrededor—. Los salvajes están muertos. —¿Te dan miedo los muertos? —preguntó Ser Waymar Royce, insinuando apenas una sonrisa. —Los muertos están muertos —contestó Gared. No había mordido el anzuelo. Era un anciano de más de cincuenta años, y había visto ir y venir a muchos jóvenes señores—. No tenemos nada que tratar con ellos.", "—¿Y de veras están muertos? —preguntó Royce delicadamente—. ¿Qué prueba tenemos? —Will los vio —respondió Gared—. Si él dice que están muertos, no necesito más pruebas. —Mi madre me dijo que los muertos no cantan canciones —intervino Will. Sabía que lo iban a meter en la disputa tarde o temprano. Le habría gustado que fuera más tarde que temprano.", "—Mi ama de cría me dijo lo mismo, Will —replicó Royce—. Nunca creas nada de lo que te diga una mujer cuando estás junto a su teta. Hasta de los muertos se pueden aprender cosas. —Su voz resonó demasiado alta en el anochecer del bosque. —Tenemos un largo camino por delante —señaló Gared—. Ocho días, hasta puede que nueve. Y se está haciendo de noche. —Como todos los días alrededor de esta hora —dijo Ser Waymar Royce después de echar una mirada indiferente al cielo—. ¿La oscuridad te atemoriza, Gared?"]
                    },
                    {
                        'type': 'image',
                        'data': 'http://s3.amazonaws.com/static.hivequal.org/files/photos/4931/images/large.jpg?1505243628'
                    },
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
                },
                'content': [
                    {
                        'type': 'title',
                        'data': 'Capítulo 1'
                    },
                    {
                        'type': 'text',
                        'data': 'Si no quieres una criatura, tomate una pastilla diaria por la Doctora Martinez'
                    }, {
                        'type': 'list',
                        'data': ["El día había amanecido fresco y despejado, con un frío vivificante que señalaba el final del verano. Se pusieron en marcha con la aurora para ver la decapitación de un hombre. Eran veinte en total, y Bran cabalgaba entre ellos, nervioso y emocionado. Era la primera vez que lo consideraban suficientemente mayor para acompañar a su padre y a sus hermanos a presenciar la justicia del rey. Corría el noveno año de verano, y el séptimo de la vida de Bran.", "Habían sacado al hombre de un pequeño fortín de las colinas. Robb creía que se trataba de un salvaje, que había puesto su espada al servicio de Mance Rayder, el Rey-más-allá-del-Muro. A Bran se le ponía la carne de gallina sólo con pensarlo. Recordaba muy bien las historias que la Vieja Tata les había contado junto a la chimenea. Los salvajes eran crueles, les decía, esclavistas, asesinos y ladrones. Se apareaban con gigantes y con espíritus malignos, se llevaban a los niños de las cunas en mitad de la noche y bebían sangre en cuernos pulidos. Y sus mujeres yacían con los Otros durante la Larga Noche, para dar a luz espantosos hijos medio humanos.", "Pero el hombre que vieron atado de pies y manos al muro del fortín, esperando la justicia del rey, era viejo y huesudo, poco más alto que Robb. Había perdido en alguna helada las dos orejas y un dedo, y vestía todo de negro, como un hermano de la Guardia de la Noche, aunque las pieles que llevaba estaban sucias y hechas jirones"]
                    },
                    {
                        'type': 'image',
                        'data': 'https://media.metrolatam.com/2019/07/10/screenshot201907-9deaa9f195426bc5ed25dacd32c27297-600x400.jpg'
                    },
                ]
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
                },
                'content': [
                    {
                        'type': 'title',
                        'data': 'Capítulo 1'
                    },
                    {
                        'type': 'text',
                        'data': 'Diez minutos no valen nueve meses Una lección impartida por el Dr. Antonio.'
                    }, {
                        'type': 'list',
                        'data': ["La sangre Tully le corría por las venas, había nacido y se había criado en Aguasdulces, muy al sur, en el Forca Roja del Tridente. Allí el bosque de dioses era un jardín alegre y despejado, en el que las altas secuoyas proyectaban sombras sobre las aguas de arroyuelos cristalinos, los pájaros cantaban desde sus nidos escondidos y el aroma de las flores impregnaba el aire", "Los dioses de Invernalia tenían un bosque muy diferente. Era un lugar oscuro y primitivo, tres acres de árboles viejos que nadie había tocado en miles de años, mientras el castillo se alzaba a su alrededor. Olía a tierra húmeda y a putrefacción. Allí no crecían las secuoyas. Era un bosque de recios árboles centinela parapetados tras agujas color verde grisáceo, robles imponentes y tamarindos tan viejos como el propio reino. Allí los gruesos troncos negros estaban muy juntos, y las ramas retorcidas tejían una techumbre tupida, mientras las raíces deformes se entrelazaban bajo la tierra. El silencio y las sombras imperaban, y los dioses de aquel bosque no tenían nombres.", "Pero sabía que allí era donde estaría su esposo aquella noche. Siempre que le quitaba la vida a un hombre, buscaba la tranquilidad del bosque de dioses."]
                    },
                    {
                        'type': 'image',
                        'data': 'http://i.espectaculos.televisa.com/2017/10/istock-504309660.jpg'
                    },
                ]
            }, {
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
                },
                'content': [
                    {
                        'type': 'title',
                        'data': 'Capítulo 1'
                    },
                    {
                        'type': 'text',
                        'data': '¿Tienes una salhicha coctelera o un chorizo argentino? por la Doctora Marinez'
                    }, {
                        'type': 'list',
                        'data': ["Llevaban casi medio año viviendo en la casa del magíster, comiendo en su mesa y mimados por sus criados. Dany tenía trece años, edad suficiente para saber que regalos como aquéllos rara vez eran desinteresados allí, en la ciudad libre de Pentos.", "—Illyrio no es ningún idiota —dijo Viserys. Era un joven flaco, con manos nerviosas y ojos color lila claro, siempre febriles—. El magíster sabe que, cuando esté sentado en mi trono, no olvidaré a mis amigos.", "Dany no dijo nada. El magíster Illyrio comerciaba con especias, piedras preciosas, huesodragón y otras mercancías menos delicadas. Según los rumores tenía amigos repartidos por las Nueve Ciudades Libres, y aún más lejos, en Vaes Dothrak y en las legendarias tierras que se extendían más allá del mar de Jade. También se decía que jamás había tenido un amigo al que no hubiera vendido de buena gana por un precio razonable. Dany escuchaba los comentarios en las calles y oía aquellas cosas, pero nunca se le ocurriría discutir con su hermano mientras éste tejía sus redes de sueños. No quería bajo ningún concepto suscitar su ira, lo que Viserys llamaba «despertar al dragón»."]
                    },
                    {
                        'type': 'image',
                        'data': 'https://www.insideedition.com/sites/default/files/styles/content_full/public/images/2018-06/istock-829471540.jpg?itok=6P3BxAyN'
                    },
                ]
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
                },
                'content': [
                    {
                        'type': 'title',
                        'data': 'Capítulo 1'
                    },
                    {
                        'type': 'text',
                        'data': 'Aunque te guste la leche debes de cuidarte por el doctor Antonio.'
                    }, {
                        'type': 'list',
                        'data': ["Los visitantes entraban como un río de oro, plata y acero bruñido por las puertas del castillo, más de trescientos, la élite de los abanderados, los caballeros, las espadas leales y los jinetes libres. Sobre ellos ondeaban una docena de estandartes dorados, agitados por el viento del norte, en los que se veía el venado coronado de Baratheon.", "Ned conocía personalmente a muchos de los jinetes. Allí estaba Ser Jaime Lannister, de cabellos tan brillantes como el oro batido, y Sandor Clegane, con el espantoso rostro quemado. El muchachito alto que cabalgaba junto a él sólo podía ser el príncipe heredero, y el hombrecillo atrofiado que iba detrás de ellos era sin duda el Gnomo, Tyrion Lannister.", "Pero el hombretón corpulento que cabalgaba al frente de la columna, flanqueado por dos caballeros con las capas níveas de la Guardia Real, era casi un desconocido para Ned... hasta que se bajó del caballo de guerra con un rugido harto familiar, y lo estrechó en un abrazo de oso que le hizo crujir los huesos."]
                    },
                    {
                        'type': 'image',
                        'data': 'https://cf.ltkcdn.net/pregnancy/images/std/210579-766x450-Woman-showing-condom.jpg'
                    },
                ]
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
                },
                'content': [
                    {
                        'type': 'title',
                        'data': 'Capítulo 1'
                    },
                    {
                        'type': 'text',
                        'data': '¡Sacalo! escrito por el Doctor Antonio.'
                    }, {
                        'type': 'list',
                        'data': ["Había ocasiones, aunque no muchas, en las que Jon Nieve se alegraba de ser el hijo bastardo. Aquella noche, mientras se llenaba una vez más la copa de vino de la jarra de un mozo que pasaba junto a él, pensó que ésa era una de ellas.", "Volvió a ocupar su lugar en el banco, entre los escuderos jóvenes, y bebió. El sabor dulce y afrutado del vino veraniego le impregnó la boca y dibujó una sonrisa en sus labios.", "La sala principal de Invernalia estaba llena de humo y el aire cargado del olor a carne asada y a pan recién hecho. Los estandartes cubrían los muros de piedra gris. Blanco, oro y escarlata: el huargo de los Stark, el venado coronado de los Baratheon y el león de los Lannister. Un trovador tocaba el arpa alta al tiempo que recitaba una balada, pero en aquel rincón de la sala apenas se lo escuchaba por encima del crepitar de las llamas, el estrépito de los platos y las copas, y el murmullo de cientos de conversaciones ebrias."]
                    },
                    {
                        'type': 'image',
                        'data': 'https://c8.alamy.com/compes/rg5wm8/malestar-hombre-haciendo-gestos-de-pensamiento-en-la-moderna-sala-de-estar-rg5wm8.jpg'
                    },
                ]
            }
            ];

        return {
            cards,
            surveys,
            admins,
            users
        };

    }
}