<?php

namespace App\Controller\Entreprise;

use App\DTO\FormFilter\EntrepriseDTOFormFilter;
use App\Form\Filter\EntrepriseFilterType;
use App\Service\QueryService;
use App\Store\Entreprise\EntrepriseStore;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

class DeleteEntrepriseController extends AbstractController
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
          $this->addFlash('success', $this->translator->trans('entreprise_deleted'));
      } else {
          $this->addFlash('danger', $this->translator->trans('error'));
      }
      return $this->redirectToRoute('entreprise_list', $request->query->all());
    }

    /**
     * @throws TransportExceptionInterface
     */
    #[Route('/entreprise/delete-multiple', name: 'entreprise_delete_multiple', methods: ['POST'])]
    public function deleteMultiple(Request $request): Response
    {
        dd('heere');
        $reponse = $this->entrepriseStore->removeEntreprise($id);
        if($reponse->getStatusCode() === 204){
            $this->addFlash('success', $this->translator->trans('entreprise_deleted'));
        } else {
            $this->addFlash('danger', $this->translator->trans('error'));
        }
        return $this->redirectToRoute('entreprise_list', $request->query->all());
    }
}
