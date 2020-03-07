<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->increments("id");
            $table->string("name")->nullable(false);
            $table->string("documentIdentity")->nullable(false);
            $table->string("lastName")->nullable(false);
            $table->string("nationality")->nullable(false);
            $table->string("codeSystem")->nullable(false);
            $table->timestamp("datecreate")->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->unsignedInteger("user_id");
            $table->foreign("user_id")->references("id")->on("users");
            $table->integer("state")->default(1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patients');
    }
}
