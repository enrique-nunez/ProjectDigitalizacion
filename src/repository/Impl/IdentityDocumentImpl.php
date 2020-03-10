<?php

namespace Src\repository\Impl;

use Src\models\Documentidentity;
use Src\repository\Inter\IdentityDocumentInterface;

class IdentityDocumentImpl implements IdentityDocumentInterface
{
    private $model;
    public function __construct(Documentidentity $model)
    {
        $this->model = $model;
    }
    public function  all()
    {
        return $this->model->all();
    }
    public function create(array $data)
    {
        return $this->model->create($data);
    }
    public function update(array $data, $id)
    {
        return $this->model->find($id)->update($data);
    }
    public function find($id)
    {
    }
}
