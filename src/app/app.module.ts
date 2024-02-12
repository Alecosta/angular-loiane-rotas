import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { AppRoutingModule } from './app-routing.module';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos/cursos.service';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosModule } from './cursos/cursos.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent//,
    //CursosComponent,
    //CursoDetalheComponent,
    //CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    CursosModule,
    AppRoutingModule
  ],
  //providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
