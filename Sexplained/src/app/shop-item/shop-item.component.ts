import {
    Component,
    OnInit, Input
} from '@angular/core';

@Component({
    selector: 'app-shop-item',
    templateUrl: './shop-item.component.html',
    styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {
    @Input() id = 0;
    @Input() banner = "https://images.homedepot-static.com/productImages/0b10f2de-892e-42b7-aed4-6fa738027a16/svn/storm-matte-formica-laminate-sheets-009121258512000-64_400_compressed.jpg";
    @Input() title = "Cargando...";
    @Input() text = "Este texto se esta cargando, talvez tarde un poco, pero no te preocupes, ya cargara...";
    @Input() date = "Fecha";
    @Input() authorId = "0";
    @Input() price = 0;
    @Input() people = "";
    @Input() authorName = "Nombre";
    @Input() authorAvatar = "https://i1.wp.com/ggrmlawfirm.com/wp-content/uploads/avatar-placeholder.png?fit=256%2C256&ssl=1";
    constructor() {}

    ngOnInit() {}

}