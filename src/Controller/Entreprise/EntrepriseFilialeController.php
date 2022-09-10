<?php

namespace App\Controller\Entreprise;

use App\Controller\CustomAbstractController;
use App\DTO\FormFilter\EntrepriseDTOFormFilter;
use App\Form\Filter\EntrepriseFilterType;
use App\Service\QueryService;
use App\Store\Entreprise\EntrepriseStore;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;

class EntrepriseFilialeController extends CustomAbstractController
{
    public function __construct(private readonly EntrepriseStore  $entrepriseStore,
                                private readonly QueryService $queryService
    )
    {
    }
    public function r($request, $filiale = false): RedirectResponse|Response
    {
        $dto = new EntrepriseDTOFormFilter();
        $dto->setRecherche($request->query->get('recherche'));
        $dto->setType($request->query->get('type'));
        $dto->setPage($request->query->get('page', 1));
        $formFilter = $this->createForm(EntrepriseFilterType::class, $dto);
        $formFilter->handleRequest($request);
        if($formFilter->isSubmitted() && $formFilter->isValid()){
            $data = $formFilter->getData();
            return $this->queryService->redirect($request, $data);
        }
        [$entreprises, $pages] = $filiale
            ? $this->entrepriseStore->getFiliales()
            : $this->entrepriseStore->getEntreprises();
        return $this->render('entreprise/index.html.twig', [
            'entreprises' => $entreprises,
            'pages' => $pages,
            'form' => $formFilter->createView(),
            'filiale' => $filiale
        ]);
    }
}