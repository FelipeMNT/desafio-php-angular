<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TipoTransacao extends Model
{
    // Define o nome da tabela manualmente
    protected $table = 'tipos_transacao';

    // Campos que podem ser preenchidos em massa
    protected $fillable = ['nome'];

    // Relação com o model Transacao
    public function transacoes()
    {
        return $this->hasMany(Transacao::class, 'tipo_transacao_id');
    }
}