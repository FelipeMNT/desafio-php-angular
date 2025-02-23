import { Component } from '@angular/core';
import { FormTransacaoComponent } from './components/form-transacao/form-transacao.component';
import { ListaTransacoesComponent } from './components/lista-transacoes/lista-transacoes.component';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [FormTransacaoComponent, ListaTransacoesComponent], // ✅ Adicionado aqui
})
export class AppComponent {}
