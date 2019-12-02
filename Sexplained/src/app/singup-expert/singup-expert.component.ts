import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from '@angular/router';
@Component({
    selector: 'app-singup-expert',
    templateUrl: './singup-expert.component.html',
    styleUrls: ['./singup-expert.component.scss']
})
export class SingupExpertComponent implements OnInit {
    error=""
    admin = {
        "name": "",
        "mail": "",
        "password": "",
        "type": "admin",
        "phone": "",
        "avatar": "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
        "info": "",
        "banner": "https://images.pexels.com/photos/34090/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
        "modules": [],
        "surveys": []
    };

    passwordcheck = {
        'check': ''
    };

    constructor(private userService: UserService, private router: Router) {}

    ngOnInit() {}

    enviarFormulario() {
        if(this.admin.name ==""||
           this.admin.mail ==""||
           this.admin.password ==""||
           this.admin.phone ==""
          ){
             this.error="Favor de llenar todos los datos"
            document.getElementById("passCheckLabel").style.display = 'block';
        }else
        if (this.admin.password == this.passwordcheck.check) {
            this.userService.createUser(this.admin).subscribe((ret) => {
                console.log(ret);
            });
            //this.router.navigate(['/']);
        } else {
            this.error="Las Contraseñas no coinciden"
            document.getElementById("passCheckLabel").style.display = 'block';
        }
    }

}