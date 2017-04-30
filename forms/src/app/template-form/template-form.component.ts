import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  usuario:any = {
    nome: "Marcos",
    email: "marcos@email.com"
  }
  ngOnInit() {
  }

  onSubmit(form){
    console.log(form.value);

    console.log(this.usuario);
  }

}
