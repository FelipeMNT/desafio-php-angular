import { Component, OnInit } from '@angular/core';
import { TransacaoService } from '../../services/transacao.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { EditarTransacaoComponent } from '../editar-transacao/editar-transacao.component';
import { MatFormFieldModule } from '@angular/material/form-field';  
import { MatSelectModule } from '@angular/material/select';  
import { MatOptionModule } from '@angular/material/core';  

@Component({
  selector: 'app-lista-transacoes',
  standalone: true,
  templateUrl: './lista-transacoes.component.html',
  styleUrls: ['./lista-transacoes.component.css'],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,   
    MatSelectModule,      
    MatOptionModule,      
  ],
})
export class ListaTransacoesComponent implements OnInit {
  transacoes: any[] = [];
  displayedColumns: string[] = ['descricao', 'valor', 'tipo_transacao', 'categoria', 'data_transacao', 'acoes'];
  tipoFiltro: string = ''; // Variável para armazenar o tipo selecionado no filtro

  constructor(private transacaoService: TransacaoService, private dialog: MatDialog) {}

  ngOnInit() {
    this.carregarTransacoes();
  }

  carregarTransacoes() {
    this.transacaoService.getTransacoes(this.tipoFiltro).subscribe((data) => {
      this.transacoes = data;
    });
  }

  aplicarFiltro() {
    this.carregarTransacoes();
  }

  excluirTransacao(id: number) {
    if (confirm('Tem certeza que deseja excluir esta transação?')) {
      this.transacaoService.deletarTransacao(id).subscribe({
        next: () => {
          this.transacoes = this.transacoes.filter(t => t.id !== id);
          alert('Transação excluída com sucesso!');
        },
        error: (err) => {
          console.error('Erro ao excluir:', err);
          alert('Erro ao excluir transação.');
        }
      });
    }
  }

  editarTransacao(transacao: any) {
    const dialogRef = this.dialog.open(EditarTransacaoComponent, {
      width: '400px',
      data: transacao // Passando a transação para o modal
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Chamando o serviço para atualizar os dados no backend
        this.transacaoService.atualizarTransacao(result).subscribe({
          next: (updatedTransacao) => {
            // Atualiza a transação na lista com os dados alterados
            const index = this.transacoes.findIndex(t => t.id === updatedTransacao.id);
            if (index !== -1) {
              this.transacoes[index] = updatedTransacao;
            }
            alert('Transação atualizada com sucesso!');
          },
          error: (err) => {
            console.error('Erro ao atualizar a transação:', err);
            alert('Erro ao atualizar a transação.');
          }
        });
      }
    });
  }
}
