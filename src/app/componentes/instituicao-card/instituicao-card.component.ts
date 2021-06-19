import { Component, Input, OnInit } from '@angular/core';
import { InstituicoesApiModel } from 'src/app/services/instituicoes-api-model';

@Component({
  selector: 'app-instituicao-card',
  templateUrl: './instituicao-card.component.html',
  styleUrls: ['./instituicao-card.component.css']
})
export class InstituicaoCardComponent implements OnInit {

  @Input() instituicao: InstituicoesApiModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
