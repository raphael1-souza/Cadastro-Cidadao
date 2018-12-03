<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UF extends Model
{
    protected $table = 'UF';
    protected $primaryKey = 'codigo_uf';
    public $incrementing = false;
    public $timestamps = false;
}
