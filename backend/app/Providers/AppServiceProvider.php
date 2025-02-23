<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route; // Importe a facade Route
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // Aqui você pode registrar bindings de classes ou serviços.
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Configurar rotas da API
        Route::prefix('api') // Prefixo /api para todas as rotas
            ->middleware('api') // Middleware padrão da API
            ->namespace('App\Http\Controllers') // Namespace dos controllers
            ->group(function () {
                // Rotas da API
                Route::apiResource('transacoes', \App\Http\Controllers\TransacaoController::class);
            });

        // Configurar rotas web (opcional)
        Route::middleware('web')
            ->namespace('App\Http\Controllers')
            ->group(base_path('routes/web.php'));
    }
}