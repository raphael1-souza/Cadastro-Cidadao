<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Estado_Civil extends Model
{
    protected $table = 'EstadoCivil';
    protected $primaryKey = 'codigo_ecivil';
    public $timestamps = false;
}
