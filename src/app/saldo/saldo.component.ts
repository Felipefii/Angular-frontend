import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SaldoService } from '../saldo.service';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private saldoService: SaldoService) 
    { 
      
  }

  ngOnInit() {
  }

}
