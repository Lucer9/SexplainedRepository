import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-singup-expert',
  templateUrl: './singup-expert.component.html',
  styleUrls: ['./singup-expert.component.scss']
})
export class SingupExpertComponent implements OnInit {

	admin = {
		'id': '4',
		'name': '',
		'modules': [],
		'surveys': [],
		'avatar': '',
		'info': '',
		'phone': '',
		'mail': '',
		'password': '',
		'banner': ''
	};

	passwordcheck = {
		'check': ''
	};

  constructor(private adminService:AdminService, private router: Router) { }

  ngOnInit() {
  }

  enviarFormulario(){
  		if(this.admin.password == this.passwordcheck.check){
  			this.adminService.createAdmin(this.admin).subscribe((ret)=>{
          console.log("Admin created: ", ret);
	    });
  			this.router.navigate(['/']);
	  	}else{
	  		document.getElementById("passCheckLabel").style.display = 'block';
	  	}
  	}

}
