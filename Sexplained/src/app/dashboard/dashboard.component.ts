import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CardService } from '../card.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    cards: any[] = [];

    constructor(private cardService: CardService) {}

    ngOnInit() {
        this.cardService.getCards().subscribe((data: any[]) => {
            console.log(data);
            this.cards = data;
        })
    }
}
