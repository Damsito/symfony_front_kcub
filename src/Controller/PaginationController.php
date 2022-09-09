<?php

declare(strict_types=1);


namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Routing\Annotation\Route;

class PaginationController extends AbstractController
{
    private Request $request;
    public function __construct(RequestStack $requestStack)
    {
        $this->request = $requestStack->getCurrentRequest();
    }

    #[Route(path: '/changePage/{page}', name: 'changePage')]
    public function changePage($page = 1): RedirectResponse
    {
        $params = $this->request->query->all();
        $var = array('page' => $page);
        $newParams = array_replace($params, $var);
        $uri = explode('?', $this->request->headers->get('referer'))[0] . '?' . http_build_query($newParams);
        return $this->redirect($uri);
    }
}