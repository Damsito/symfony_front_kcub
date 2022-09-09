<?php

namespace App\Controller;

use App\Store\Home\HomeStore;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(HomeStore $homeStore): Response
    {
        $services = $homeStore->getServices();
        $errors = $homeStore->getErrors();
        return $this->render('home/index.html.twig', [
            'services' => $services,
            'errors' => $errors,
        ]);
    }
}
