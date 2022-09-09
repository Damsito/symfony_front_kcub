<?php

declare(strict_types=1);


namespace App\Store\Alerte;

use App\Store\ApiStore;

class AlerteStore extends ApiStore
{
    public function getAlertes(){
        return $this->api->get('fr/api/services/alertes');
    }
}