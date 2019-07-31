import { Component, OnInit } from '@angular/core';
import { ParticipantesServiceService } from '../participantes-service.service';
import Participante from '../models/Participante'

@Component({
  selector: 'app-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.css']
})
export class InserirComponent implements OnInit {

  
  constructor(private participantesService : ParticipantesServiceService) { }
  
  participante:Participante={
    nome:""    
  }

  ngOnInit() {
    
  }
  onFormSubmit(){
    
    this.participantesService.insertOne(this.participante).subscribe(x=>{
      x.id
    });
  }
}
