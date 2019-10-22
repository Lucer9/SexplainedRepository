import {Component,OnInit,Input} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {CardService} from '../card.service';


@Component({
    selector: 'app-module',
    templateUrl: './module.component.html',
    styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {

    id;
    card;
    sub;

    constructor(private activateRoute: ActivatedRoute, private router: Router, private cardService: CardService) {
        this.sub = this.activateRoute.paramMap.subscribe(params => {
            this.id = params.get('id');
        });
    }

    ngOnInit() {
        this.cardService.getCard(this.id).subscribe((card: any[]) => {
            //@ts-ignore
            var myEl = angular.element(document.querySelector('.content'));
            this.card = card;
            console.log(card)
            for (var i = 0; i < this.card.content.length; i++) {
                switch (this.card.content[i].type) {
                    case 'title':
                        myEl.append("<h3 style='font-weight: 600; font-family:Poppins, sans-serif;'>" + this.card.content[i].data + "</h3>");
                        break;
                    case 'text':
                        myEl.append("<p margin: 20px 0 20px 0;>" + this.card.content[i].data + "</p>");
                        break;
                    case 'list':
                        myEl.append("<ul>");
                        for (var j = 0; j < this.card.content[i].data.length; j++) {
                            myEl.append("<li>" + this.card.content[i].data[j] + "</li>");
                        }
                        myEl.append("</ul>");
                        break;
                    case 'image':
                        myEl.append("<img style=' margin: 20px 15%;width: 70%;'src='" + this.card.content[i].data + "'>");
                        break;
                }
            }
        })
    }
}