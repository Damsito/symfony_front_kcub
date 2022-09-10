<?php

declare(strict_types=1);


namespace App\Store\Equipe;

use App\Store\ApiStore;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;
use Symfony\Contracts\HttpClient\ResponseInterface;

class EquipeStore extends ApiStore
{
    /**
     * @throws TransportExceptionInterface
     * @throws ServerExceptionInterface
     * @throws RedirectionExceptionInterface
     * @throws DecodingExceptionInterface
     * @throws ClientExceptionInterface
     */
    public function getEquipes(): array
    {
        $reponse = $this->api->getAll('fr/api/equipes', $this->getQuery());
        $equipes = $reponse['hydra:member'];
        $pages = $this->paginationService->getPages($reponse['hydra:view'] ?? []);
        return [$equipes, $pages];
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