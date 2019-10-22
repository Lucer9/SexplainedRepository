import {Component,OnInit,Input} from '@angular/core';
@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.scss']
})

export class SidemenuComponent implements OnInit {
    @Input() activeTab;
    @Input() cart=0;
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

    constructor() {}

    ngOnInit() {
        this.menuUser[2].text=this.menuUser[2].text+' ('+this.cart+')'
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