<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientclinicsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patientclinics', function (Blueprint $table) {
            $table->increments("id");
            $table->timestamp("dateStartAttention")->nullable(false);
            $table->timestamp("dateEndtAttention")->nullable(false);
            $table->timestamp("timeAttention")->nullable(false);
            $table->string("value")->nullable(false);

            $table->unsignedInteger("user_id");
            $table->foreign("user_id")->references("id")->on("users");
            $table->unsignedInteger("patiente_id");
            $table->foreign("patiente_id")->references("id")->on("patients");
            $table->unsignedInteger("center_attention_id");
            $table->foreign("center_attention_id")->references("id")->on("masterdetails");
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
        Schema::dropIfExists('patientclinics');
    }
}
