<?php

namespace Src\models;

use Illuminate\Database\Eloquent\Model;

class Documentidentity extends Model
{
    protected $fillable = ["shortName", "limit", "fullName"];
    public $timestamps = false;
    //
}
