<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cidadao extends Model
{
    protected $table = 'Cidadao';
    protected $primaryKey = 'cpf';
    public $incrementing = false;
    public $timestamps = false;


    public function escolaridade(){
    	return $this->belongsTo('App\Escolaridade','codigo_escolaridade');
    }
    public function genero(){
    	return $this->belongsTo('App\Genero','codigo_genero');
    }
    public function raca(){
    	return $this->belongsTo('App\Raca','codigo_raca');
    }
    public function ocupacao(){
    	return $this->belongsTo('App\Ocupacao','codigo_ocupacao');
    }
    public function estadoCivil(){
    	return $this->belongsTo('App\Estado_Civil','codigo_ecivil');
    }
    public function uf(){
    	return $this->belongsTo('App\UF','codigo_uf');
    }
    public function vinculo(){
    	return $this->belongsTo('App\Vinculo','codigo_vinculo');
    }
}
