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

import { DashboardComponent } from './dashboard/dashboard.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarritoComponent } from './carrito/carrito.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { NoticiasComponent } from './noticias/noticias.component'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SingupUserComponent } from './singup-user/singup-user.component';
import { SingupExpertComponent } from './singup-expert/singup-expert.component';


import { FormsModule } from '@angular/forms';
import { ModuleComponent } from './module/module.component';
import { SurveyComponent } from './survey/survey.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { FormChartComponent } from './form-chart/form-chart.component';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigComponent } from './config/config.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ChartComponent } from './chart/chart.component';

import { ModuleEditComponent } from './module-edit/module-edit.component';
import { ModuleAddComponent } from './module-add/module-add.component';


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
    SingupExpertComponent,
    ModuleComponent,
    SurveyComponent,
    UserComponent,
    AdminComponent,
    ShopItemComponent,
    ConfigComponent,
    ShopItemComponent,
    AdminHomeComponent,
    ModuleEditComponent,
    ModuleAddComponent,
    FormChartComponent,
    ChartComponent,
  ],
    imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),    
    InMemoryWebApiModule.forRoot(DataService, { passThruUnknownUrl: true }),
    FormsModule,
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    ],

    providers: [],
    bootstrap: [AppComponent],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}