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
      "https://www.defensoria.rs.def.br/upload/recortes/202003/05101833_66361_GD.png",
      "https://www.otaboanense.com.br/wp-content/uploads/2020/03/programacao_mes_da_mulher_embu2.jpg",
      "https://www.sinjus.org.br/wp-content/uploads/img_noticia_mes_mulher.jpg"

    ]
  }

}
