import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'form1';

  nome1:any =''
  sobrenome1:any =''
  username1:any =''
  cpf1:any =''
  telefone1:any =''
  endereco1:any =''
  complemento1:any =''
  senha01:any =''
  senha11:any =''

  constructor(
    public dialog: MatDialog) {}



ngOnInit(): void {
  
 }

 openDialog(): void {
 let ref = this.dialog.open( DialogComponent)

 ref.componentInstance.nome = this.nome1
 ref.componentInstance.sobrenome =this.sobrenome1
 ref.componentInstance.username =this.username1
 ref.componentInstance.cpf =this.cpf1
 ref.componentInstance.telefone =this.telefone1
 ref.componentInstance.endereco =this.endereco1
 ref.componentInstance.complemento =this.complemento1
 ref.componentInstance.senha0 =this.senha01
 ref.componentInstance.senha1 =this.senha11

 }
}