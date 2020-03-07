<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('files', function (Blueprint $table) {
            $table->increments("id");
            $table->string("name");
            $table->string("nameSystem");
            $table->string("folio")->nullable(false);
            $table->unsignedInteger("pattiente_clinic_id");
            $table->foreign("pattiente_clinic_id")->references("id")->on("patientclinics");
            $table->unsignedInteger("type_file_id");
            $table->foreign("type_file_id")->references("id")->on("masterdetails");
            $table->timestamp("datecreate")->default(DB::raw('CURRENT_TIMESTAMP'));
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
        Schema::dropIfExists('files');
    }
}
