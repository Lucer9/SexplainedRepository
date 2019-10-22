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
    SurveyService
} from '../survey.service';

@Component({
    selector: 'app-survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
    id;
    survey;
    sub;

    constructor(private activateRoute: ActivatedRoute, private router: Router, private surveyService: SurveyService) {
        this.sub = this.activateRoute.paramMap.subscribe(params => {
            this.id = params.get('id');
        });
    }

    ngOnInit() {
        this.surveyService.getSurvey(this.id).subscribe((survey: any[]) => {
            //@ts-ignore
            var myEl = angular.element(document.querySelector('.content'));
            this.survey = survey;
            console.log(survey)
            for (var i = 0; i < this.survey.content.length; i++) {
                var pregunta = this.survey.content[i].pregunta;
                var data = this.survey.content[i].data;
                switch (this.survey.content[i].type) {
                    case 'input':
                        myEl.append(`
                                    <div class="form-group" style='margin-top:20px;'>
                                    <label style='font-weight:600;' for="${pregunta}">${pregunta}</label>
                                    <input class="form-control" id="${pregunta}" placeholder="${data}">
                                    </div>`);
                        break;

                    case 'checkbox':
                        myEl.append("<label style='font-weight:600; margin-top:20px;'>" + pregunta + "</label>");
                        for (var j = 0; j < data.length; j++) {
                            myEl.append(`
                                    <div class="form-check">
                                    <input style="margin: 0;"class="form-check-input" type="checkbox" name=${pregunta}" value="${pregunta+data[j]}" id="${pregunta+data[j]}">
                                    <label class="form-check-label" for="${pregunta+data[j]}">
                                    ${data[j]}
                                    </label>
                                    </div>`);
                        }
                        break;
                        
                    case 'radio':
                        myEl.append("<label style='font-weight:600; margin-top:20px;'>" + pregunta + "</label>");
                        for (var j = 0; j < data.length; j++) {
                            myEl.append(`
                                    <div class="form-check">
                                    <input style="margin: 0;"class="form-check-input" type="radio" name=${pregunta}" value="${pregunta+data[j]}" id="${pregunta+data[j]}">
                                    <label class="form-check-label" for="${pregunta+data[j]}">
                                    ${data[j]}
                                    </label>
                                    </div>`);
                        }
                        break;
                        
                    case 'textarea':
                        myEl.append(`
                                    <div class="form-group" style='margin-top:20px;'>
                                    <label style='font-weight:600;' for="${pregunta}">${pregunta}</label>
                                    <textarea class="form-control" id="${pregunta}" placeholder="${data}" rows="3"></textarea>
                                    </div>`
                                   );
                        break;
                }
            }            myEl.append('<button style="background-color: #D50069; border:none; cursor:pointer;" type="submit" class="btn btn-primary">Submit</button>')

        })
    }
}