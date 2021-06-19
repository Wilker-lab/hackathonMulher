import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-sobre',
  templateUrl: './slide-sobre.component.html',
  styleUrls: ['./slide-sobre.component.css']
})
export class SlideSobreComponent implements OnInit {

  imagemAtual = 0;
  imagens: string [] = [];
  cont:number =0;
  teste: number=0;
  arrayTamanho:number = this.imagens.length;

  Proximo() : void{
    this.arrayTamanho = this.imagens.length;
    if(this.cont < this.imagens.length-1){
      this.imagemAtual += 1
      this.cont++;

    }else{
     this.imagemAtual= this.cont =0;
   }
  }

  Anterior() : void{
    if(this.cont !=0){
      this.imagemAtual -= 1
      this.cont--;
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.imagens =[
      "https://br.freepik.com/fotos-premium/pessoas-empilhando-maos-como-um-equipe_3729828.htm",
      "https://br.freepik.com/vetores-gratis/mulheres-fazendo-coisas_3516296.htm",
      "https://br.freepik.com/vetores-gratis/grupo-internacional-de-mulheres-com-design-plano_3253702.htm"

    ]
  }

}
