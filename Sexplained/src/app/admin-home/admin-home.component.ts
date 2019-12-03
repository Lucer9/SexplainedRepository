import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CardService } from '../card.service';
import { SurveyService } from '../survey.service';
import { UserService } from '../user.service';
@Component({
    selector: 'app-admin-home',
    templateUrl: './admin-home.component.html',
    styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
    id;
    admin;
    cards: any[] = [];
    tempCards: any[] = [];
    results = []


    searcher = ""
    constructor(private cardService: CardService, private surveyService: SurveyService, private userService: UserService) {}

    ngOnInit() {
        this.id=(localStorage.getItem('token'));
        this.userService.getUser(this.id).subscribe((admin) => {
                console.log(admin)
                this.admin = admin
                for (var i = 0; i < this.admin.modules.length; i++) {
                    this.cardService.getCard(this.admin.modules[i]).subscribe((card) => {
                        this.cards.push(card);
                        this.tempCards.push(card);
                        console.log(card)
                    })
                }
            
            for (var i = 0; i < this.admin.surveys.length; i++) {
                    this.surveyService.getSurvey(this.admin.surveys[i]).subscribe((card) => {
                        this.cards.push(card);
                        this.tempCards.push(card);
                        console.log(card)
                    })
                }
            })
        }

        dataChanged() {
            if (this.searcher == "") {
                this.cards = this.tempCards
            }
            this.results = []
            for (var i = 0; i < this.cards.length; i++) {
                if (this.cards[i].text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.searcher.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) || this.cards[i].title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.searcher.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) {
                    this.results.push(this.cards[i])
                }
            }
            this.cards = this.results
        }
    }