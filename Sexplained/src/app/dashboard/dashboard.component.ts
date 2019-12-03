import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CardService } from '../card.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    cards: any[] = [];
    tempCards: any[] = [];
    results = []
    userId=""
    @Input() cart=0;

    searcher = ""
    constructor(private cardService: CardService) {}

    ngOnInit() {
        this.userId = (localStorage.getItem('token'));
        console.log(this.userId)
        this.cardService.getCards().subscribe((cards: any[]) => {
            this.cards = cards;
            this.tempCards = cards;
            console.log(cards)
        })
    }

    dataChanged() {
        if(this.searcher==""){
            this.cards=this.tempCards
        }
        this.results=[]
        for (var i = 0; i < this.cards.length; i++) {
            if(this.cards[i].text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.searcher.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) || this.cards[i].title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.searcher.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) ){
                this.results.push(this.cards[i])
            }
        }
        this.cards=this.results
    }


    displayCounter(count) {
        console.log(count);
        this.cart=this.cart+count
    }
}