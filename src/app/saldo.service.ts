import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaldoService {
  id = 0;

  constructor(private http: HttpClient) { }

  getSaldo(): Observable<any> {
    return this.http.get('http://localhost:8080/participante/' + this.id + "/saldo");
  }
}
