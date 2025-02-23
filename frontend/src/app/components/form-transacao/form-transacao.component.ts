import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; 

@Component({
  selector: 'app-form-transacao',
  standalone: true,
  templateUrl: './form-transacao.component.html',
  styleUrls: ['./form-transacao.component.css'], 
  imports: [
    FormsModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule
  ],
})
export class FormTransacaoComponent {
  transacao = { 
    descricao: '', 
    valor: 0, 
    categoria: '', 
    data_transacao: '',
    tipo_transacao_id: null // Apenas o tipo de transação (Receita/Despesa)
  };

  categorias = ['Aluguel', 'Pagamento', 'Prolabore', 'Outros'];

  tiposTransacao = [
    { id: 1, nome: 'Receita' },
    { id: 2, nome: 'Despesa' }
  ];

  constructor(private http: HttpClient) {}

  // Ajustar o valor da transação com base no tipo selecionado
  ajustarValorPorTipo() {
    if (this.transacao.tipo_transacao_id === 2) { // Despesa
      this.transacao.valor = -Math.abs(this.transacao.valor); // Garante que o valor seja negativo
    } else if (this.transacao.tipo_transacao_id === 1) { // Receita
      this.transacao.valor = Math.abs(this.transacao.valor); // Garante que o valor seja positivo
    }
  }

  salvarTransacao() {
    this.ajustarValorPorTipo(); // Ajusta o valor conforme o tipo de transação

    // Envia a transação para o backend sem o campo tipo
    this.http.post('http://127.0.0.1:8080/api/transacoes', this.transacao).subscribe({
      next: () => {
        alert('Transação cadastrada com sucesso!');
        // Resetar o formulário após sucesso
        this.transacao = { descricao: '', valor: 0, categoria: '', data_transacao: '', tipo_transacao_id: null };
      },
      error: (error) => {
        console.error('Erro ao cadastrar transação', error);
      }
    });
  }
}
