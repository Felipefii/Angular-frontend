import { Component, OnInit } from '@angular/core';
import { ParticipantesServiceService } from '../participantes-service.service'
import { ActivatedRoute } from '@angular/router';
import Participante from '../models/participante';


@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent implements OnInit {

  part: Array<any>;
  
  private p: Participante
  constructor(private partService: ParticipantesServiceService,private route: ActivatedRoute) { 
   
  }

  ngOnInit() {
    this.partService.getAll().subscribe(
      (data) => {this.part = data;
      });
  }

}
