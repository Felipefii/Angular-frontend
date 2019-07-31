import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticipantesComponent } from './participantes/participantes.component';
import { InserirComponent } from './inserir/inserir.component';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms'
import { ToolbarModule } from 'primeng/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SaldoComponent } from './saldo/saldo.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantesComponent,
    InserirComponent,
    ToolbarComponent,
    SaldoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ToolbarModule,
    SplitButtonModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
