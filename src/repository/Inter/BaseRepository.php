<?php

namespace Src\repository\Inter;

interface BaseRepository
{
    public function  all();
    public function create(array $data);
    public function update(array $data, $id);
    public function find($id);
}
