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
    public dialog: MatDialog) {}



ngOnInit(): void {
  
 }

 openDialog(): void {
  const dialogRef = this.dialog.open( DialogComponent,{
    width: '250px',
   
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  
  });
}

}




