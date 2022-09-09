<?php

declare(strict_types=1);


namespace App\Store\ContactEntreprise;

use App\DTO\FormFilter\ContactEntrepriseDTOFormFilter;
use App\Store\ApiStore;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;

class ContactEntrepriseStore extends ApiStore
{
    /**
     * @throws TransportExceptionInterface
     * @throws ServerExceptionInterface
     * @throws RedirectionExceptionInterface
     * @throws DecodingExceptionInterface
     * @throws ClientExceptionInterface
     */
    public function getContactEntreprises(): array
    {
        $reponse = $this->api->getAll('fr/api/contact_entreprises', $this->getQuery());
        $contacts = $reponse['hydra:member'];
        $pages = $this->paginationService->getPages($reponse['hydra:view'] ?? []);
        return [$contacts, $pages];
    }

    private function getQuery(): array
    {
        $query = [];
        $page = $this->request->query->get('page', 1);
        $query['page'] = $page;
        $sort = $this->request->query->get('sort', ContactEntrepriseDTOFormFilter::ASC);
        $query['order[nom]'] = $sort;
        $recherche = $this->request->query->get('recherche');
        $query['nomRaison'] = $recherche;
        return $query;
    }

}