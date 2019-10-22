import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.scss']
})
export class EncuestasComponent implements OnInit {
    cards: any[] = [];
    tempCards: any[] = [];
    results = []
    
    @Input() cart=0;

    searcher = ""

    constructor(private surveyService: SurveyService) {}

    ngOnInit() {
        this.surveyService.getSurveys().subscribe((cards: any[]) => {
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
}