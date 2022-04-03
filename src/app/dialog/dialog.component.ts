import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
      
      nome:any =''
      sobrenome:any =''
      username:any =''
      cpf:any =''
      telefone:any =''
      endereco:any =''
      complemento:any =''
      senha0:any =''
      senha1:any =''

  constructor( public dialogRef: MatDialogRef<DialogComponent>,) { }
    
     

  ngOnInit(): void {
  }
  
  cancel(): void {
    this.dialogRef.close();
  }

}
