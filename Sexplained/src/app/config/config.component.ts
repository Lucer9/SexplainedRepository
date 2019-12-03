import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
    selector: 'app-config',
    templateUrl: './config.component.html',
    styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
    complete = true
    error = "Estan vacios los campos"
    author = {
        id: '',
        mail: '',
        password: ''
    }
    public lenguaje = 'en';

    constructor(private translate: TranslateService, private userService: UserService) {
        this.translate.setDefaultLang(this.lenguaje);
    }

    ngOnInit() {
        this.author.id = (localStorage.getItem('token'));

    }

    public cambiarLenguaje(lang) {
        this.lenguaje = lang;
        this.translate.use(lang);
    }

    enviarFormulario() {
        if (!this.author.mail.includes("@") ||
            !this.author.mail.includes(".")) {
            this.complete = false;
            this.error = "ingresa un correo valido"
        } else {
            if (this.author.password == "") {
                this.complete = false;
                this.error = "ingresa una contraseña"
            } else {
                this.complete = true;
                console.log(this.author)
                this.userService.updateUser(this.author).subscribe((res) => {
                    console.log(res)
                })
            }
        }
    }
}