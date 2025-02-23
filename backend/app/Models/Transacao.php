<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transacao extends Model
{
    // Define o nome da tabela manualmente
    protected $table = 'transacoes';

    // Campos que podem ser preenchidos em massa
    protected $fillable = ['descricao', 'valor', 'tipo', 'tipo_transacao_id', 'data_transacao', 'categoria'];

    // Relação com o model TipoTransacao
    public function tipoTransacao()
    {
        return $this->belongsTo(TipoTransacao::class, 'tipo_transacao_id');
    }
    public $timestamps = false; // Desativa o created_at e updated_at
}