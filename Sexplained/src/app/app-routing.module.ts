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
        path: 'registro',
        component: SignupComponent
    },{
        path: 'registroUsuario',
        component: SingupUserComponent
    },{
        path: 'registroExperto',
        component: SingupExpertComponent
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
