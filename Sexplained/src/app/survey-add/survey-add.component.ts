import {
    Component,
    OnInit,
    Input
} from '@angular/core';
import {
    HttpClient
} from '@angular/common/http';


import { UserService} from '../user.service';

import {
    SurveyService
} from '../survey.service';

import {
    NgbModal,
    ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap';



@Component({
    selector: 'app-survey-add',
    templateUrl: './survey-add.component.html',
    styleUrls: ['./survey-add.component.scss']
})
export class SurveyAddComponent implements OnInit {

    id
    error = ""
    closeResult
    title = ""
    text = ""
    complete = true;
    banner = 'https://images.pexels.com/photos/34090/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260'

    date
    admin = {
        id: '',
        name: '',
        avatar: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081',
        banner: '"https://images.pexels.com/photos/34090/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"',
        modules: []

    };
    content = []
    sub;

    constructor(private userService: UserService, private surveyService: SurveyService, private modalService: NgbModal) {}

    ngOnInit() {
        this.id = (localStorage.getItem('token'));
        this.userService.getUser(this.id).subscribe((admin) => {
            //@ts-ignore
            this.admin = admin;
            console.log(this.admin)
        })

        var d = new Date();
        this.date = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()

    }

    prepend(item, i) {
        if (i == 0)
            i = this.content.length;
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
                    'data': ['','','']
                }
                break;

            case 'checkbox':
                object = {
                    'type': 'checkbox',
                    'pregunta': '',
                    'data': ['','','']
                }
                break;
        }
        this.content.splice(i, 0, object)
        console.log(this.content)
    }

    open(content, i) {
        this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
        }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            if (reason == 'remove') {
                this.content.splice(i, 1)
                console.log(this.content)
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

        if (this.title == "" ||
            this.text == "" ||
            this.content.length == 0) {
            this.error = "No puedes subir un módulo vacio"
            this.complete = false;
        } else {
            this.complete = true;
            for (var i = 0; i < this.content.length; i++) {
                if (this.content[i].pregunta == "" || this.content[i].data[0] == "" || this.content[i].data[1] == "" || this.content[i].data[2] == "") {
                    this.error = "Completa o elimina los campos vacios"
                    this.complete = false;
                }
            }
        }



        var survey = {
            "title": this.title,
            "text": this.text,
            "date": this.date,
            "banner": this.banner,
            "author": {
                "id": this.admin.id,
                "name": this.admin.name,
                "avatar": this.admin.avatar
            },
            "people": 0,
            "content": this.content
        }
        console.log(survey)

        if (this.complete) {
            console.log("POST")
            this.surveyService.createSurvey(survey).subscribe((res) => {
                console.log(res)
                //@ts-ignore
                this.admin.surveys.push(res.id)
                this.userService.updateUser(this.admin).subscribe((res2) => {
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