import { LeisPageComponent } from './componentes/leis-page/leis-page.component';
import { InstituicoesPageComponent } from './componentes/instituicoes-page/instituicoes-page.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HomeComponent } from './componentes/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobrePageComponent } from './componentes/sobre-page/sobre-page.component';

const routes: Routes = [
  {
    path: "",
    component: MenuComponent,
    children:[
      {
        path:"",
        component: HomeComponent
      },
      {
        path:"instituicoes",
        component: InstituicoesPageComponent
      },
      {
        path:"leis",
        component: LeisPageComponent
      },
      {
        path:"sobre",
        component: SobrePageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
