<?php

declare(strict_types=1);


namespace App\Store;

use App\Api\Api;
use App\Service\PaginationService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;

class ApiStore
{
    protected Request $request;
    public function __construct(
        protected Api $api,
        protected PaginationService $paginationService,
        RequestStack $requestStack
    )
{
    $this->request = $requestStack->getCurrentRequest();
}


}