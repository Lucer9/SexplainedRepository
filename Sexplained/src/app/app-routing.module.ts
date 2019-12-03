import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component'; 
import { CarritoComponent } from './carrito/carrito.component'; 
import { EncuestasComponent } from './encuestas/encuestas.component'; 
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './card/card.component';
import { SingupUserComponent } from './singup-user/singup-user.component';
import { SingupExpertComponent } from './singup-expert/singup-expert.component';
import { ModuleComponent } from './module/module.component'; 
import { ModuleEditComponent } from './module-edit/module-edit.component'; 
import { ModuleAddComponent } from './module-add/module-add.component';
import { SurveyEditComponent } from './survey-edit/survey-edit.component'; 
import { SurveyAddComponent } from './survey-add/survey-add.component'; 
import { SurveyComponent } from './survey/survey.component'; 
import { FormChartComponent } from './form-chart/form-chart.component';
import { AdminComponent } from './admin/admin.component'; 
import { ConfigComponent } from './config/config.component';
import { AdminHomeComponent } from './admin-home/admin-home.component'; 

const routes: Routes = [
    {
        path: 'modulos',
        component: DashboardComponent
    },{
        path: 'carrito',
        component: CarritoComponent
    },{
        path: 'encuestas',
        component: EncuestasComponent
    },{
        path: 'modulos/:id',
        component: ModuleComponent
    },{
        path: 'edit/modulos/:id',
        component: ModuleEditComponent
    },{
        path: 'add/modulos',
        component: ModuleAddComponent
    },{
        path: 'edit/survey/:id',
        component: SurveyEditComponent
    },{
        path: 'add/survey',
        component: SurveyAddComponent
    },{
        path: 'encuestas/:id',
        component: SurveyComponent
    },{
        path: 'autor/:id',
        component: AdminComponent
    },{
        path: 'adminHome',
        component: AdminHomeComponent
    },{
        path: 'registro',
        component: SignupComponent
    },{
        path: 'registroUsuario',
        component: SingupUserComponent
    },{
        path: 'registroExperto',
        component: SingupExpertComponent
    },
    {
        path:'settings',
        component: ConfigComponent
    },{
        path: 'graficas',
        component: FormChartComponent
    },{
        path: '',
        component: LoginComponent
    },{
        path: '**',
        component: DashboardComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
