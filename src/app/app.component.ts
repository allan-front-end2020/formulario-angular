import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form1';

  nome:string =''
  sobrenome:string =''
  username:string =''
  cpf:string =''
  telefone:string =''
  endereco:string =''
  complemento:string =''
  senha0:string =''
  senha1:string =''
}
