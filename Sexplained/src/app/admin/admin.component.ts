import {
    Component,
    OnInit,
    Input
} from '@angular/core';
import {
    Router,
    ActivatedRoute
} from '@angular/router';
import {
    HttpClient
} from '@angular/common/http';
import {
    UserService
} from '../user.service';

import {
    CardService
} from '../card.service';

import {
    SurveyService
} from '../survey.service';
@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    id;
    admin;
    cards = []
    sub;

    constructor(private activateRoute: ActivatedRoute, private router: Router, private userService: UserService, private cardService: CardService, private surveyService: SurveyService) {
        this.sub = this.activateRoute.paramMap.subscribe(params => {
            this.id = params.get('id');
        });
    }

    ngOnInit() {
        //@ts-ignore

        this.userService.getUser(this.id).subscribe((admin: any[]) => {
            //@ts-ignore
            var myEl = angular.element(document.querySelector('.content'));
            this.admin = admin;
            console.log(admin)
            for (var i = 0; i < this.admin.modules.length; i++) {
                this.cardService.getCard(this.admin.modules[i]).subscribe((card: any[]) => {
                    this.cards.push(card)
                })
            }
            for (var i = 0; i < this.admin.surveys.length; i++) {
                this.surveyService.getSurvey(this.admin.surveys[i]).subscribe((card: any[]) => {
                    this.cards.push(card)
                })
            }
        })


    }
}