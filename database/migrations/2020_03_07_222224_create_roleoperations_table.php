<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoleoperationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roleoperations', function (Blueprint $table) {
            $table->increments("id");
            $table->unsignedInteger("role_id");
            $table->foreign("role_id")->references("id")->on("roles");
            $table->unsignedInteger("operation_id");
            $table->foreign("operation_id")->references("id")->on("operations");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('roleoperations');
    }
}
