<?php

namespace App\Controller\Entreprise;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ListeFilialeController extends AbstractController
{
    public function __construct(
        private readonly EntrepriseFilialeController $controller
    )
    {
    }

    #[Route('/filiales', name: 'filiale_list')]
    public function index(Request $request): Response
    {
        return $this->controller->r($request, ['filiale' => true]);

    }
}
