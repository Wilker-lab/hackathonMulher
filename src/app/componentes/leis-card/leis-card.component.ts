import { Component, OnInit, Input } from '@angular/core';
import { LeisApiModel } from 'src/app/services/leis-api-model';

@Component({
  selector: 'app-leis-card',
  templateUrl: './leis-card.component.html',
  styleUrls: ['./leis-card.component.css']
})
export class LeisCardComponent implements OnInit {

  @Input() leis: LeisApiModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
