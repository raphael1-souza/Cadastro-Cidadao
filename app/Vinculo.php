<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vinculo extends Model
{
    protected $table = 'Vinculo';
    protected $primaryKey = 'codigo_vinculo';
    public $timestamps = false;
}
