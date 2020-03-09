<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Src\repository\Inter\IdentityDocumentInterface;

class DocumentIdentityController extends Controller
{
    private $repository;
    public function __construct(IdentityDocumentInterface $documentIdentity)
    {
        $this->repository = $documentIdentity;
    }
    public function save(Request $request)
    {
        return $this->repository->create(json_decode(json_encode($request->json()->all()), true));
    }
}
