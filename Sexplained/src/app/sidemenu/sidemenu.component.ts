import {Component,OnInit,Input} from '@angular/core';
@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.scss']
})

export class SidemenuComponent implements OnInit {
    @Input() activeTab;
    menu;
    menuUser = [{
            'link': "/modulos",
            'text': "Módulos",
            'icon': "fa-book",
            'num': "0",

            }, {
            'link': "/carrito",
            'text': "Carrito",
            'icon': "fa-shopping-cart",
            'num': "0",
            }, {
            'link': "/encuestas",
            'text': "Encuestas",
            'icon': "fa-check",
            'num': "0",
            }
        ]

    constructor() {}

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