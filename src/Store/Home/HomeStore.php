<?php

declare(strict_types=1);


namespace App\Store\Home;

use App\Api\Api;
use App\Store\ApiStore;

class HomeStore extends ApiStore
{
    public function getServices()
    {
        $query = [
            'pagination' => false
        ];
        return $this->api->getAll('fr/api/services', $query)['hydra:member'];
    }

    public function getErrors()
    {
        return $this->api->getOne('fr/api/services/alertes_erreurs')['errors'];
    }
}