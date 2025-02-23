import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-transacao',
  standalone: true,
  templateUrl: './editar-transacao.component.html',
  styleUrls: ['./editar-transacao.component.css'],
  imports: [
    FormsModule,            
    MatFormFieldModule,     
    MatInputModule,         
    MatButtonModule,        
    MatSelectModule,        
    MatDialogModule,        
  ]
})
export class EditarTransacaoComponent {
  transacao: any;

  constructor(
    public dialogRef: MatDialogRef<EditarTransacaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.transacao = { ...data };
  }

  onNoClick(): void {
    this.dialogRef.close(); 
  }

  onSalvar(): void {
    // Atualizando tipo_transacao e tipo_transacao_id
    if (this.transacao.tipo_transacao === 'receita') {
      this.transacao.tipo_transacao_id = 1; // Id para receita
      this.transacao.tipo_transacao = 'receita'; // Atualiza para 'receita'
    } else if (this.transacao.tipo_transacao === 'despesa') {
      this.transacao.tipo_transacao_id = 2; // Id para despesa
      this.transacao.tipo_transacao = 'despesa'; // Atualiza para 'despesa'
    }
  
    // Passa os dados atualizados de volta para o componente pai
    this.dialogRef.close(this.transacao);
  }
  
  
}
