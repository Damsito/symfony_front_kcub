<?php

declare(strict_types=1);


namespace App\Store\Entreprise;

use App\Store\ApiStore;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;
use Symfony\Contracts\HttpClient\ResponseInterface;

class EntrepriseStore extends ApiStore
{
    /**
     * @throws TransportExceptionInterface
     * @throws ServerExceptionInterface
     * @throws RedirectionExceptionInterface
     * @throws DecodingExceptionInterface
     * @throws ClientExceptionInterface
     */
    public function getEntreprises(): array
    {
        return $this->get();
    }
    public function get(array $additionalQuery = []): array
    {
        $reponse = $this->api->getAll('fr/api/entreprises', $this->getQuery($additionalQuery));
        $entreprises = $reponse['hydra:member'];
        $pages = $this->paginationService->getPages($reponse['hydra:view'] ?? []);
        return [$entreprises, $pages];
    }
    public function getFiliales(): array
    {
        return $this->get(['entiteGroupe' => true]);
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function removeEntreprise($id): ResponseInterface
    {
        return $this->api->delete("fr/api/entreprises/$id");
    }
    private function getQuery(array $additional = []): array
    {
        $query = [];
        $page = $this->request->query->get('page', 1);
        $query['page'] = $page;
        $recherche = $this->request->query->get('recherche');
        $query['raisonSociale'] = $recherche;
        $type = $this->request->query->get('type');
        $query['type'] = $type;
        return array_merge($additional, $query);
    }
}