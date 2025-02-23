# DesafioPHP - Gerenciamento de Transações Financeiras

Este projeto é uma aplicação de gerenciamento de transações financeiras, desenvolvida utilizando **Laravel** no backend e **Angular** no frontend. O objetivo principal do sistema é permitir o cadastro, listagem, edição e exclusão de transações financeiras, como receitas e despesas.

## Tecnologias Utilizadas

- **Backend**: Laravel (PHP)
- **Frontend**: Angular com Angular Material
- **Banco de Dados**: MySQL
- **Ferramentas de Desenvolvimento**:
  - Git para controle de versão
  - Visual Studio Code para desenvolvimento

## Funcionalidades

### Backend (Laravel)
- Criação, listagem, edição e exclusão de transações financeiras.
- Suporte a categorias de transação (ex.: Aluguel, Pagamento, Prolabore, Outros).
- Tipos de transação (Receita ou Despesa) com lógica para controle de valores.
  
### Frontend (Angular)
- Formulário para cadastro de transações financeiras.
- Listagem de transações utilizando o componente `mat-table` do Angular Material.
- Interface responsiva com componentes do Angular Material, como `mat-card`, `mat-select`, `mat-input`, etc.
- Validação de campos no frontend para garantir dados corretos antes de enviar ao backend.

## Estrutura do Projeto

### Backend (Laravel)
- **app/Http/Controllers/TransacaoController.php**: Controlador responsável pela lógica de transações.

### Frontend (Angular)
- **src/app/components/form-transacao**: Componente para o formulário de cadastro de transações.
- **src/app/components/lista-transacoes**: Componente para listar as transações.
- **angular.json**: Configuração do projeto Angular.
- **package.json**: Dependências e scripts do projeto frontend.
