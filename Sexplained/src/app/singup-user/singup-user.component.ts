import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from '@angular/router';
@Component({
    selector: 'app-singup-user',
    templateUrl: './singup-user.component.html',
    styleUrls: ['./singup-user.component.scss']
})
export class SingupUserComponent implements OnInit {

    error = ""
    usuario = {
        "name": "",
        "mail": "",
        "password": "",
        "type": "user",
        "bought_modules": [],
        "cart": [],
    };

    passwordcheck = {
        'check': ''
    };

    constructor(private userService: UserService, private router: Router) {}

    ngOnInit() {

    }

    enviarFormulario() {
        if(this.usuario.name ==""||
           this.usuario.mail ==""||
           this.usuario.password ==""
          ){
             this.error="Favor de llenar todos los datos"
            document.getElementById("passCheckLabel").style.display = 'block';
        }else
        if (this.usuario.password == this.passwordcheck.check) {
            this.userService.createUser(this.usuario).subscribe((ret) => {
                console.log(ret);
            });
            //this.router.navigate(['/']);
        } else {
            this.error="Las Contraseñas no coinciden"
            document.getElementById("passCheckLabel").style.display = 'block';
        }
    }

}