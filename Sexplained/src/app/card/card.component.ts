import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() data = {
    'banner':"https://images.homedepot-static.com/productImages/0b10f2de-892e-42b7-aed4-6fa738027a16/svn/storm-matte-formica-laminate-sheets-009121258512000-64_400_compressed.jpg",
    'title':"Cargando...",
    'text':"Cargando...",
    'avatar':"https://i1.wp.com/ggrmlawfirm.com/wp-content/uploads/avatar-placeholder.png?fit=256%2C256&ssl=1",
    'author':"Autor",
    'date':"Fecha"
    }
    
    constructor() {}

    ngOnInit() {}

    alert(){
        alert("hola!");
    }

}