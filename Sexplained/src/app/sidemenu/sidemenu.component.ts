import {Component,OnInit,Input} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../user.service';

@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.scss']
})

export class SidemenuComponent implements OnInit {
    @Input() activeTab;
    @Input() cart=0;
    user;
    menu;
    menuUser = [{
            'link': "/modulos",
            'text': "Módulos",
            'icon': "fa-book",
            }, {
            'link': "/encuestas",
            'text': "Encuestas",
            'icon': "fa-check",
            }, {
            'link': "/carrito",
            'text': "Carrito",
            'icon': "fa-shopping-cart",
            }
        ]

    constructor(private translate: TranslateService, private userService: UserService) {
        this.userService.getUser(1).subscribe((user) => {
            this.user=user
            this.translate.get('menu').subscribe((menu) => {
                this.menuUser[0].text = menu.modulos;
                this.menuUser[1].text = menu.encuestas;
                this.menuUser[2].text = menu.carrito +' ('+this.user.cart.length+')';
            });
        }
    )};

    ngOnInit() {
        this.menu = this.menuUser;
    }

    toggleMenu() {
        if (document.getElementById("menu").offsetWidth == 0) {
            document.getElementById("menu").style.width = "100px";
        } else if (document.getElementById("menu").offsetWidth == 100) {
            document.getElementById("menu").style.width = "0px";
        }
    }

}