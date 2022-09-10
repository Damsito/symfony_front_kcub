<?php

declare(strict_types=1);


namespace App\Store\Home;

use App\Api\Api;
use App\Store\ApiStore;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;

class HomeStore extends ApiStore
{
    /**
     * @throws \Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface
     * @throws ClientExceptionInterface
     */
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