<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ocupacao extends Model
{
    protected $table = 'Ocupacao';
    protected $primaryKey = 'codigo_ocupacao';
    public $timestamps = false;
}
