<?php

namespace App\Controller;

use App\DTO\FormFilter\EntrepriseDTOFormFilter;
use App\Form\Filter\EntrepriseFilterType;
use App\Service\QueryService;
use App\Store\Entreprise\EntrepriseStore;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class EntrepriseController extends AbstractController
{
    public function __construct(private readonly EntrepriseStore $entrepriseStore,
    private readonly QueryService                                $queryService
    )
    {
    }

    #[Route('/entreprise', name: 'entreprise_list')]
    public function index(Request $request, ): Response
    {
        $dto = new EntrepriseDTOFormFilter();
        $dto->setRecherche($request->query->get('recherche'));
        $dto->setType($request->query->get('type'));
        $dto->setPage($request->query->get('page', 1));
        $formFilter = $this->createForm(EntrepriseFilterType::class, $dto);
        $formFilter->handleRequest($request);
        if($formFilter->isSubmitted() && $formFilter->isValid()){
            $data = $formFilter->getData();
            $data->setPage(1);
            return $this->queryService->redirect($request, $data);
        }
        [$entreprises, $pages] = $this->entrepriseStore->getEntreprises();
        return $this->render('entreprise/index.html.twig', [
            'entreprises' => $entreprises,
            'pages' => $pages,
            'form' => $formFilter->createView()
        ]);
    }
}
