import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Participante from './models/participante';

@Injectable({
  providedIn: 'root'
})
export class ParticipantesServiceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/participante/participantes');
  }

  insertOne(participante):Observable<any>{
    return this.
      http.
      post<Participante>('http://localhost:8080/participante/inserir', participante, {headers:{"Content-Type":"application/json"}})
      
  }
}
