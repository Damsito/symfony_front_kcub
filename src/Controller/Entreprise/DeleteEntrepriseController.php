<?php

namespace App\Controller\Entreprise;

use App\Controller\CustomAbstractController;
use App\Service\QueryService;
use App\Store\Entreprise\EntrepriseStore;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

class DeleteEntrepriseController extends CustomAbstractController
{
    public function __construct(private readonly EntrepriseStore $entrepriseStore,
    private readonly TranslatorInterface $translator,
    private QueryService $queryService
    )
    {
    }

    /**
     * @throws TransportExceptionInterface
     */
    #[Route('/entreprise/delete', name: 'entreprise_delete', methods: ['POST'])]
    public function index(Request $request): Response
    {
        $id = $request->request->get('id');
        if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
            $reponse = $this->entrepriseStore->removeEntreprise($id);

            if($reponse->getStatusCode() === 204){
                $this->addFlash('success', $this->translator->trans('entreprise_delete_one', [], 'entreprise'));
            } else {
                $this->addFlash('danger', $this->translator->trans('error', [], 'messages'));
            }
        }

      return $this->redirectToRoute('entreprise_list', $this->getQuery($request));
    }
    /**
     * @throws TransportExceptionInterface
     */
    #[Route('/entreprise/delete-multiple', name: 'entreprise_delete_multiple', methods: ['POST'])]
    public function deleteMultiple(Request $request): Response
    {
        if ($this->isCsrfTokenValid('delete' , $request->request->get('_token'))) {
            $ids = $request->request->get('ids');
            $ids = explode(',', $ids);
            $reponses = [];
            foreach ($ids as $id){
                $reponses[] = $this->entrepriseStore->removeEntreprise($id);
            }
            if( $this->array_all(function($x) { return $x->getStatusCode() === 204; }, $reponses)){
                $this->addFlash('success', $this->translator->trans('entreprise_delete_multiple', [], 'entreprise'));
            } else {
                $this->addFlash('danger', $this->translator->trans('error', [], 'messages'));
            }
        }

        return $this->redirectToRoute('entreprise_list',
            $this->getQuery($request)
        );
    }
    private function getQuery(Request $request): array
    {
        $changePage = $request->request->get('changePage', false);
        $page = (int)$request->request->get('page', 1);
        $type = $request->request->get('type');
        $recherche = $request->request->get('recherche');
        if($page !== 1 && $changePage) {
            $page = $page - 1;
        }
        $query = [
            'page' => $page,
            'type' => $type,
            'recherche' => $recherche,
        ];
        return $this->queryService->getFilteredQuery($query);
    }
}
