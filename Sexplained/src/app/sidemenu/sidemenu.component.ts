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
            }, {
            'link': "/carrito",
            'text': "Carrito",
            'icon': "fa-shopping-cart",
            }, {
            'link': "/encuestas",
            'text': "Encuestas",
            'icon': "fa-check",
            }
        ]

    constructor() {
    }

    ngOnInit() {
        this.menu = this.menuUser;
    }

}