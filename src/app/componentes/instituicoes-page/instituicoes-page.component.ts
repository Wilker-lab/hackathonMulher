import { Component, OnInit } from '@angular/core';
import { ApiInstituicoesService } from 'src/app/services/api-instituicoes.service';
import { InstituicoesApiModel } from 'src/app/services/instituicoes-api-model';

@Component({
  selector: 'app-instituicoes-page',
  templateUrl: './instituicoes-page.component.html',
  styleUrls: ['./instituicoes-page.component.css']
})
export class InstituicoesPageComponent implements OnInit {

  listaDeInstituicoes: InstituicoesApiModel[] = [];

  constructor(public instituicoesApi: ApiInstituicoesService) { }

  ngOnInit(): void {
    this.instituicoesApi.get().subscribe({
			next: (retornoDaApi) => {
				this.listaDeInstituicoes = retornoDaApi;
			}
		});

  }

}
