<?php

namespace App\Controller\Entreprise;

use App\Controller\CustomAbstractController;
use App\Store\Entreprise\EntrepriseStore;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

class DeleteEntrepriseController extends CustomAbstractController
{
    public function __construct(private readonly EntrepriseStore $entrepriseStore,
    private readonly TranslatorInterface $translator
    )
    {
    }

    /**
     * @throws TransportExceptionInterface
     */
    #[Route('/entreprise/{id}/delete', name: 'entreprise_delete', methods: ['GET'])]
    public function index($id, Request $request): Response
    {
      $reponse = $this->entrepriseStore->removeEntreprise($id);

      if($reponse->getStatusCode() === 204){
          $this->addFlash('success', $this->translator->trans('entreprise_delete_one', [], 'entreprise'));
      } else {
          $this->addFlash('danger', $this->translator->trans('error', [], 'messages'));
      }
      return $this->redirectToRoute('entreprise_list', $this->getQuery($request));
    }
    /**
     * @throws TransportExceptionInterface
     */
    #[Route('/entreprise/delete-multiple', name: 'entreprise_delete_multiple', methods: ['GET'])]
    public function deleteMultiple(Request $request): Response
    {
        $ids = $request->query->get('ids');
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
        return $this->redirectToRoute('entreprise_list',
            $this->getQuery($request)
        );
    }
}
