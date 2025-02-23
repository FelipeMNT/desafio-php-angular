<?php

namespace App\Http\Controllers;

use App\Models\Transacao;
use Illuminate\Http\Request;

class TransacaoController extends Controller
{
    // Listar todas as transações
    public function index(Request $request)
    {
        $query = Transacao::with('tipoTransacao');
        
        if ($request->has('tipo')) {
            // Filtra por tipo de transação
            $query->where('tipo', $request->tipo);
        }
        
        return $query->get();
    }


    // Cadastrar uma transação
    public function store(Request $request)
    {
        // Validação dos dados
        $validated = $request->validate([
            'descricao' => 'required|string|max:255',
            'valor' => 'required|numeric',
            'tipo_transacao_id' => 'required|exists:tipos_transacao,id', // Validando o tipo de transação
            'categoria' => 'required|string|max:255',
            'data_transacao' => 'required|date',
        ]);

        // Determina o tipo baseado no tipo_transacao_id
        $validated['tipo'] = $validated['tipo_transacao_id'] == 1 ? 'receita' : 'despesa';

        // Ajuste no valor da transação se for uma despesa
        if ($validated['tipo_transacao_id'] == 2) {
            $validated['valor'] = -abs($validated['valor']); // Despesas são valores negativos
        }

        // Cria a transação no banco
        $transacao = Transacao::create($validated);

        return response()->json($transacao, 201);
    }

    // Mostrar uma transação específica
    public function show($id)
    {
        return Transacao::with('tipoTransacao')->findOrFail($id);
    }

    // Atualizar uma transação
    public function update(Request $request, $id)
{
    // Validação dos dados para atualização
    $validated = $request->validate([
        'descricao' => 'sometimes|required|string|max:255',
        'valor' => 'sometimes|required|numeric',
        'tipo_transacao_id' => 'sometimes|required|exists:tipos_transacao,id', // Validando o tipo de transação
        'categoria' => 'sometimes|required|string|max:255',
        'data_transacao' => 'sometimes|required|date',
    ]);

    // Ajuste no valor da transação se for uma despesa
    if (isset($validated['tipo_transacao_id']) && $validated['tipo_transacao_id'] == 2) {
        // Verifica se o tipo é despesa e torna o valor negativo
        $validated['valor'] = -abs($validated['valor']); // Despesas são valores negativos
    }

    // Se o tipo de transação foi alterado, atualiza o campo 'tipo'
    if (isset($validated['tipo_transacao_id'])) {
        $validated['tipo'] = $validated['tipo_transacao_id'] == 1 ? 'receita' : 'despesa';
    }

    // Buscando a transação para atualizar
    $transacao = Transacao::findOrFail($id);

    // Atualizando a transação com os dados validados
    $transacao->update($validated);

    return response()->json($transacao, 200);
}


    // Excluir uma transação
    public function destroy($id)
    {
        Transacao::destroy($id);
        return response()->json(null, 204);
    }
}
