import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CardComponent } from './card/card.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { DataService } from './data.service';

import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarritoComponent } from './carrito/carrito.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { NoticiasComponent } from './noticias/noticias.component'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SingupUserComponent } from './singup-user/singup-user.component';
import { SingupExpertComponent } from './singup-expert/singup-expert.component';


@NgModule({
    declarations: [
    AppComponent,
    SidemenuComponent,
    LoginComponent,
    SidemenuComponent,
    SignupComponent,
    CardComponent,
    DashboardComponent,
    CarritoComponent,
    EncuestasComponent,
    NoticiasComponent,
    SingupUserComponent,
    SingupExpertComponent
  ],
    imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),    
    InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule
  ],

    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}