import {Component,OnInit} from '@angular/core';
@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.scss']
})

export class SidemenuComponent implements OnInit {
    active = "";
    menu;
    menuUser = [{
            'link': "/",
            'text': "Módulos",
            'icon': "fa-book",
            'id': 1
            }, {
            'link': "/",
            'text': "Carrito",
            'icon': "fa-shopping-cart",
            'id': 2
            }, {
            'link': "/",
            'text': "Encuestas",
            'icon': "fa-check",
            'id': 3
            }
        ]

    constructor() {
    }

    ngOnInit() {
        this.active = 1
        this.menu = this.menuUser;
    }

}