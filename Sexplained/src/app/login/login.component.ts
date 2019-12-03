import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    images = ["https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/09/15/14/istock-187235013.jpg?w968/",
           "http://www.coface-eu.org/wp-content/uploads/2017/09/NewsSept-WHDayUNAF.jpg",
           "https://images.yourstory.com/cs/5/79900dd0-d913-11e8-a160-45a90309d734/shutterstock_12929380871561564974814.png?fm=png&auto=format",
           "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3NurnZ3nIF0NgoqlqKibOhXS_1nQp4cP0yJJH6AWN_K-kN4k7"]

    usuario = {
        'id': '',
        'mail': '',
        'name': "",
        'bought_modules': [],
        'cart': [],
        'password': '',
    };

    users: any[] = [];
    constructor(private userService: UserService, private router: Router) {}

    ngOnInit() {
        this.userService.getUsers().subscribe((data: any[]) => {
            this.users = data;
            console.log(this.users);
        });
    }

    enviarFormulario() {
        this.users.forEach(function (userLog, usuarioCheck) {
            if (userLog.mail == this.usuario.mail && userLog.password == this.usuario.password) {
                //                this.router.navigate(['/modulos']);
                console.log(userLog.type)
                if (userLog.type == "user") {
                    location.replace("http://localhost:4200/modulos");
                    localStorage.setItem('token', userLog.id);

                } else
                if (userLog.type == "admin") {
                    location.replace("http://localhost:4200/adminHome");
                    localStorage.setItem('token', userLog.id);

                } else {
                    document.getElementById("passCheckLabel").style.display = 'block';
                }
            }
        }, this);
    }
}
