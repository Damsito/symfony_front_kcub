<?php

namespace App\Controller;

use App\Service\PaginationService;
use App\Store\Alerte\AlerteStore;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AlerteController extends AbstractController
{
    #[Route('/alertes', name: 'alerte')]
    public function index(AlerteStore $alerteStore): Response
    {
        [$services, $errors, $pages] = $alerteStore->getAlertes();
        return $this->render('alerte/index.html.twig', [
            'services' => $services,
            'errors' => $errors ?? 0,
            'pages' => $pages
        ]);
    }
}
