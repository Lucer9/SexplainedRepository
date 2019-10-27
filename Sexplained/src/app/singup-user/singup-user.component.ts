import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-singup-user',
  templateUrl: './singup-user.component.html',
  styleUrls: ['./singup-user.component.scss']
})
export class SingupUserComponent implements OnInit {

	usuario = {
		'id': '2',
		'mail': '',
		'name': "",
        'bought_modules': [],
        'cart': [],
		'password': '',
	};

	passwordcheck = {
		'check': ''
	};

  constructor(private userService:UserService, private router: Router) { }

  ngOnInit() {
  	
  }

  	enviarFormulario(){
  		if(this.usuario.password == this.passwordcheck.check){
  			this.userService.createUser(this.usuario).subscribe((ret)=>{
          console.log("Usuario created: ", ret);
	    });
  			this.router.navigate(['/']);
	  	}else{
	  		document.getElementById("passCheckLabel").style.display = 'block';
	  	}
  	}

}
