<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Escolaridade extends Model
{
    protected $table = 'Escolaridade';
    protected $primaryKey = 'codigo_escolaridade';
    public $timestamps = false;



    public function cidadoes(){
    	return $this->hasMany('App\Cidadao','codigo_escolaridade');
    }
}
