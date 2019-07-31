import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InserirComponent } from './inserir/inserir.component';
import { ParticipantesComponent } from './participantes/participantes.component';
import { SaldoComponent } from './saldo/saldo.component';


const routes: Routes = [
  {
    path:'inserir', component: InserirComponent
  },
  {
    path:'participantes', component: ParticipantesComponent
  },
  {
    path:'saldo', component: SaldoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
