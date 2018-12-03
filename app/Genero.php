<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Genero extends Model
{
    protected $table = 'Genero';
    protected $primaryKey = 'codigo_genero';
    public $timestamps = false;
}
