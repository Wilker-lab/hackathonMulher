import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './componentes/home/home.component';
import { LeisPageComponent } from './componentes/leis-page/leis-page.component';
import { InstituicoesPageComponent } from './componentes/instituicoes-page/instituicoes-page.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { InstituicaoCardComponent } from './componentes/instituicao-card/instituicao-card.component';

import {MatCardModule} from '@angular/material/card';

import { HttpClientModule } from '@angular/common/http';
import { SobrePageComponent } from './componentes/sobre-page/sobre-page.component';
import { LeisCardComponent } from './componentes/leis-card/leis-card.component';
import { TopoComponent } from './componentes/topo/topo.component';
import { SlideSobreComponent } from './componentes/slide-sobre/slide-sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeisPageComponent,
    InstituicoesPageComponent,
    MenuComponent,
    InstituicaoCardComponent,
    SobrePageComponent,
    LeisCardComponent,
    TopoComponent,
    SlideSobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
