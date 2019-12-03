import {
    Component,
    OnInit,
    Input
} from '@angular/core';
import {
    HttpClient
} from '@angular/common/http';


import {
    UserService
} from '../user.service';

import {
    SurveyService
} from '../survey.service';

import {
    NgbModal,
    ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap';

import {
    Router,
    ActivatedRoute
} from '@angular/router';



@Component({
    selector: 'app-survey-edit',
    templateUrl: './survey-edit.component.html',
    styleUrls: ['./survey-edit.component.scss']
})
export class SurveyEditComponent implements OnInit {
    id
    error = ""
    closeResult
    complete = true;
    card = {
        title : "",
        text : "",
        banner : 'https://images.pexels.com/photos/34090/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260',
        date : "",
        admin : {
            id: '',
            name: '',
            avatar: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081',
            banner: '"https://images.pexels.com/photos/34090/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"',
            modules: []

        },
        content : []
    }


    sub;

    constructor(private activateRoute: ActivatedRoute, private router: Router, private userService: UserService, private surveyService: SurveyService, private modalService: NgbModal) {
        this.sub = this.activateRoute.paramMap.subscribe(params => {
            this.id = params.get('id');
        });
    }

    ngOnInit() {
        //@ts-ignore
        this.surveyService.getSurvey(this.id).subscribe((card) => {
            //@ts-ignore
            this.card = card;
            console.log(card)
        })

    }

    prepend(item, i) {
        if (i == 0)
            i = this.card.content.length;
        var object
        switch (item) {
            case 'textarea':
                object = {
                    'type': 'textarea',
                    'pregunta': '',
                    'data': ''
                }
                break;
            case 'radio':
                object = {
                    'type': 'radio',
                    'pregunta': '',
                    'data': ['', '', '']
                }
                break;

            case 'checkbox':
                object = {
                    'type': 'checkbox',
                    'pregunta': '',
                    'data': ['', '', '']
                }
                break;
        }
        this.card.content.splice(i, 0, object)
        console.log(this.card.content)
    }

    open(content, i) {
        this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
        }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            if (reason == 'remove') {
                this.card.content.splice(i, 1)
                console.log(this.card.content)
            }
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    save() {

        if (this.card.title == "" ||
            this.card.text == "" ||
            this.card.content.length == 0) {
            this.error = "No puedes subir un módulo vacio"
            this.complete = false;
        } else {
            this.complete = true;
            for (var i = 0; i < this.card.content.length; i++) {
                if (this.card.content[i].pregunta == "" || this.card.content[i].data[0] == "" || this.card.content[i].data[1] == "" || this.card.content[i].data[2] == "") {
                    this.error = "Completa o elimina los campos vacios"
                    this.complete = false;
                }
            }
        }



        console.log(this.card)

        if (this.complete) {
            console.log("PATCH")
            this.surveyService.updateSurvey(this.card).subscribe((res) => {
                console.log(res)
                //@ts-ignore
                this.userService.updateUser(this.card.admin).subscribe((res2) => {
                    console.log(res2)
                    location.replace("http://localhost:4200/adminHome");
                }, (err) => {
                    console.log(err)
                });

            }, (err) => {
                console.log(err);
                this.error = "Ocurrio un error inesperado"
                this.complete = false;
            });
        }
    }
}