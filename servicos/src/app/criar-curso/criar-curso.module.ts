import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CriarCursoComponent } from './criar-curso.component';
import { CursosService } from '../cursos/cursos.service';


@NgModule({
  declarations: [
    CriarCursoComponent
  ],
  imports: [
    CommonModule
  ],
 // providers: [CursosService],
  exports:[
    CriarCursoComponent
  ]
})
export class CriarCursoModule { }
