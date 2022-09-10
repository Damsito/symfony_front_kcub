<?php

namespace App\Controller\Equipe;

use App\DTO\FormFilter\EntrepriseDTOFormFilter;
use App\Form\Filter\EntrepriseFilterType;
use App\Service\QueryService;
use App\Store\Equipe\EquipeStore;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;

class ListeEquipeController extends AbstractController
{
    public function __construct(private readonly EquipeStore  $equipeStore,
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
    #[Route('/equipes', name: 'equipe_list')]
    public function index(Request $request): Response
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
        [$equipes, $pages] = $this->equipeStore->getEquipes();
        return $this->render('equipe/index.html.twig', [
            'equipes' => $equipes,
            'pages' => $pages,
            'form' => $formFilter->createView()
        ]);
    }
}
