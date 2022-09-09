<?php

declare(strict_types=1);


namespace App\Store\Entreprise;

use App\Store\ApiStore;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;
use Symfony\Contracts\HttpClient\ResponseInterface;

class EntrepriseStore extends ApiStore
{
    public function getEntreprises(): array
    {
        $reponse = $this->api->getAll('fr/api/entreprises', $this->getQuery());
        $entreprises = $reponse['hydra:member'];
        $pages = $this->paginationService->getPages($reponse['hydra:view'] ?? []);
        return [$entreprises, $pages];
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function removeEntreprise($id): ResponseInterface
    {
        return $this->api->delete("fr/api/entreprises/$id");
    }
    private function getQuery(): array
    {
        $query = [];
        $page = $this->request->query->get('page', 1);
        $query['page'] = $page;
        $recherche = $this->request->query->get('recherche');
        $query['raisonSociale'] = $recherche;
        $type = $this->request->query->get('type');
        $query['type'] = $type;
        return $query;
    }
}