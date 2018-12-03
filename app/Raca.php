<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Raca extends Model
{
    protected $table = 'Raca';
    protected $primaryKey = 'codigo_raca';
    public $timestamps = false;
}
