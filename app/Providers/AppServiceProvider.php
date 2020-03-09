<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Src\repository\Impl\IdentityDocumentImpl;
use Src\repository\Inter\IdentityDocumentInterface;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
            IdentityDocumentInterface::class,
            IdentityDocumentImpl::class
        );
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
