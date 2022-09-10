<?php

declare(strict_types=1);


namespace App\Controller\ContactInterne;

use App\DTO\FormFilter\ContactEntrepriseDTOFormFilter;
use App\Form\Filter\ContactEntrepriseFilterType;
use App\Service\QueryService;
use App\Store\ContactInterne\ContactInterneStore;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;

class ListeContactInterneController extends AbstractController
{
    public function __construct(private ContactInterneStore   $store,
                                private readonly QueryService $queryService
    )
    {
    }

    /**
     * @throws TransportExceptionInterface
     * @throws ServerExceptionInterface
     * @throws RedirectionExceptionInterface
     * @throws DecodingExceptionInterface
     * @throws ClientExceptionInterface
     */
    #[Route('/contact-internes', name: 'contact_interne_list')]
    public function index(Request $request): Response
    {
        $contactFilter = new ContactEntrepriseDTOFormFilter();
        $contactFilter->setPage((int)$request->query->get('page', 1));
        $contactFilter->setRecherche($request->query->get('recherche'));
        $contactFilter->setSort($request->query->get('sort', ContactEntrepriseDTOFormFilter::ASC));
        $formSort = $this->createForm(ContactEntrepriseFilterType::class, $contactFilter);
        $formSort->handleRequest($request);
        if($formSort->isSubmitted() && $formSort->isValid()){
            $data = $formSort->getData();
            if($data->getSort() === ContactEntrepriseDTOFormFilter::ASC){
                $data->setSort(ContactEntrepriseDTOFormFilter::DESC);
            } else {
                $data->setSort(ContactEntrepriseDTOFormFilter::ASC);
            }
            return $this->queryService->redirect($request, $data);
        };
        [$contacts, $pages] = $this->store->getContactInterne();

        return $this->render('contact_interne/index.html.twig', [
            'contacts' => $contacts,
            'pages' => $pages,
            'formSort' => $formSort->createView()
        ]);
    }
}