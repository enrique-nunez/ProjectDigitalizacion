<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMasterdetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('masterdetails', function (Blueprint $table) {
            $table->increments("id");
            $table->string("code");
            $table->string("name")->nullable(false);
            $table->string("value")->nullable(false);
            $table->unsignedInteger("master_id");
            $table->foreign("master_id")->references("id")->on("masters");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('masterdetails');
    }
}
