<?php

declare(strict_types=1);


namespace App\Store\Alerte;

use App\Store\ApiStore;

class AlerteStore extends ApiStore
{
    public function getAlertes(): array
    {
        $reponse = $this->api->get('fr/api/services/alertes');
        $services = $reponse['servicesWithAlertes'];
        $errors = $reponse['errors'];
        $pages = $this->paginationService->getPages($reponse['hydra:view'] ?? []);
        return [$services, $errors,  $pages];
    }
}