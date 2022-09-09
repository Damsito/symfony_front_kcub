<?php

namespace App\Controller;

use App\Store\Alerte\AlerteStore;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AlerteController extends AbstractController
{
    #[Route('/alertes', name: 'alerte')]
    public function index(Request $request, AlerteStore $alerteStore, PaginatorInterface $paginator): Response
    {
        $alertes = $alerteStore->getAlertes();
        $pagination = $paginator->paginate(
            $alertes['servicesWithAlertes'], /* query NOT result */
            $request->query->getInt('page', 1), /*page number*/
            1 /*limit per page*/
        );
        return $this->render('alerte/index.html.twig', [
            'services' => $pagination,
            'errors' => $alertes['errors'],
        ]);
    }
}
