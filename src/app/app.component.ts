import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

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


  constructor(
    private snack : MatSnackBar
  ){}

  submit():void{
 
  this.snack.open('você foi cadastrado!', 'X' , { duration:2000 } )
  }
}
