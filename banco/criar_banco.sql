CREATE DATABASE IF NOT EXISTS financas;
USE financas;

-- Tabela de tipos de transação
CREATE TABLE tipos_transacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

-- Tabela de transações
CREATE TABLE transacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    tipo ENUM('receita', 'despesa') NOT NULL,
    tipo_transacao_id INT,
    categoria VARCHAR(255) NULL, 
    data_transacao DATE NOT NULL,
    FOREIGN KEY (tipo_transacao_id) REFERENCES tipos_transacao(id)
);

-- Inserir alguns tipos de transação
INSERT INTO tipos_transacao (nome) VALUES ('Aluguel'), ('Pagamento'), ('Prolabore');
