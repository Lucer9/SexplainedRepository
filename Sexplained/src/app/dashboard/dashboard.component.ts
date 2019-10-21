import { Component, OnInit } from '@angular/core';

import { PolicyService } from '../policy.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    policies: any[] = [];

    constructor(private policyService: PolicyService) {}

    ngOnInit() {
        this.policyService.getPolicies().subscribe((data: any[]) => {
            console.log(data);
            this.policies = data;
        })
    }
}
