import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransacaoService {
  private apiUrl = 'http://127.0.0.1:8080/api/transacoes'; // URL correta do backend

  constructor(private http: HttpClient) {}

  getTransacoes(tipoFiltro?: string): Observable<any[]> {
    let url = this.apiUrl;
    
    // Verifica se há filtro e adiciona à URL da requisição
    if (tipoFiltro) {
      url = `${this.apiUrl}?tipo=${tipoFiltro}`;
    }
  
    return this.http.get<any[]>(url).pipe(
      catchError((error) => {
        console.error('Erro ao carregar transações:', error);
        return throwError(error);
      })
    );
  }

  deletarTransacao(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        console.error('Erro ao deletar transação', error);
        return throwError(error);
      })
    );
  }

  // Serviço de atualização
  atualizarTransacao(transacao: any): Observable<any> {
    // Certifique-se de que o transacao tem o tipo correto
    return this.http.put<any>(`${this.apiUrl}/${transacao.id}`, transacao).pipe(
      catchError((error) => {
        console.error('Erro ao atualizar transação', error);
        return throwError(error);
      })
    );
  }
}
