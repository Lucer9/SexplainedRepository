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
import { CarritoComponent } from './carrito/carrito.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { NoticiasComponent } from './noticias/noticias.component'; 

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
    ModuleComponent,
    SurveyComponent,
    UserComponent,
    AdminComponent,
    ShopItemComponent
  ],
    imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,    
    InMemoryWebApiModule.forRoot(DataService, { passThruUnknownUrl: true }),
    FormsModule,
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
  ],

    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}