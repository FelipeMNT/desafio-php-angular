<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('transacoes', function (Blueprint $table) {
            $table->string('categoria')->nullable(); // Adiciona a coluna categoria
        });
    }

    public function down()
    {
        Schema::table('transacoes', function (Blueprint $table) {
            $table->dropColumn('categoria'); // Remove a coluna categoria
        });
    }
};
