<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // Populando a tabela tipos_transacao
        DB::table('tipos_transacao')->insert([
            ['nome' => 'Aluguel'],
            ['nome' => 'Pagamento'],
            ['nome' => 'Prolabore'],
        ]);

        // Populando a tabela transacoes
        DB::table('transacoes')->insert([
            [
                'descricao' => 'Recebimento de salário',
                'valor' => 5000.00,
                'tipo' => 'receita',
                'tipo_transacao_id' => 2, // Pagamento
                'data_transacao' => now(),
            ],
            [
                'descricao' => 'Pagamento do aluguel',
                'valor' => 1500.00,
                'tipo' => 'despesa',
                'tipo_transacao_id' => 1, // Aluguel
                'data_transacao' => now(),
            ],
            [
                'descricao' => 'Consultoria realizada',
                'valor' => 2000.00,
                'tipo' => 'receita',
                'tipo_transacao_id' => 3, // Prolabore
                'data_transacao' => now(),
            ],
        ]);
    }
}