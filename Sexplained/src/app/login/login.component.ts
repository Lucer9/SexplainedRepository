import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    
  images=["https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/09/15/14/istock-187235013.jpg?w968/",
           "http://www.coface-eu.org/wp-content/uploads/2017/09/NewsSept-WHDayUNAF.jpg",
           "https://images.yourstory.com/cs/5/79900dd0-d913-11e8-a160-45a90309d734/shutterstock_12929380871561564974814.png?fm=png&auto=format",
           "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3NurnZ3nIF0NgoqlqKibOhXS_1nQp4cP0yJJH6AWN_K-kN4k7"]
  constructor() { }

  ngOnInit() {
  }

}
