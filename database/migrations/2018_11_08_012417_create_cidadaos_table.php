<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCidadaosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Cidadao', function (Blueprint $table) {
            $table->string('cpf',11)->unique()->primary();
            $table->string('nome_cidadao',90);
            $table->string('nome_social',90)->nullable();
            $table->string('nome_mae',90);
            $table->date('data_nasc');
            $table->char('sexo',1);
            $table->integer('codigo_genero');
            $table->integer('codigo_raca');
            $table->char('codigo_uf',2);
            $table->integer('codigo_ecivil');
            $table->integer('codigo_escolaridade');
            $table->integer('codigo_ocupacao');
            $table->integer('codigo_vinculo');
            $table->decimal('renda_individual');
            $table->decimal('renda_familiar');
            $table->char('beneficio',3);
            $table->string('tipo_beneficio',90)->nullable();
            $table->decimal('valor_beneficio')->nullable();
            $table->string('cartao_sus',20)->nullable();


            $table->foreign('codigo_genero')->references('codigo_genero')->on('Genero');
            $table->foreign('codigo_raca')->references('codigo_raca')->on('Raca');
            $table->foreign('codigo_uf')->references('codigo_uf')->on('UF');
            $table->foreign('codigo_ecivil')->references('codigo_ecivil')->on('EstadoCivil');
            $table->foreign('codigo_escolaridade')->references('codigo_escolaridade')->on('Escolaridade');
            $table->foreign('codigo_ocupacao')->references('codigo_ocupacao')->on('Ocupacao');
            $table->foreign('codigo_vinculo')->references('codigo_vinculo')->on('Vinculo');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Cidadao');
    }
}
