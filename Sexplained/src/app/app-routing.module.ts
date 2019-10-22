import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component'; 
import { CarritoComponent } from './carrito/carrito.component'; 
import { EncuestasComponent } from './encuestas/encuestas.component'; 
import { CardComponent } from './card/card.component'; 
import { ModuleComponent } from './module/module.component'; 
import { SurveyComponent } from './survey/survey.component'; 
import { AdminComponent } from './admin/admin.component'; 

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
        path: 'encuestas/:id',
        component: SurveyComponent
    },{
        path: 'autor/:id',
        component: AdminComponent
    },{
        path: '',
        component: DashboardComponent
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
