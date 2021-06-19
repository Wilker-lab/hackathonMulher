import { Component, OnInit } from '@angular/core';
import { ApiLeisService } from 'src/app/services/api-leis.service';
import { LeisApiModel } from 'src/app/services/leis-api-model';

@Component({
  selector: 'app-leis-page',
  templateUrl: './leis-page.component.html',
  styleUrls: ['./leis-page.component.css']
})
export class LeisPageComponent implements OnInit {

  listaLeis: LeisApiModel[] = [];
​
  constructor(public leisApi: ApiLeisService) { }
​
  ngOnInit(): void {
    this.leisApi.get().subscribe({
      next: (retornoDaApi) => {
        this.listaLeis = retornoDaApi;
      }
    });
​
  }
​
}
