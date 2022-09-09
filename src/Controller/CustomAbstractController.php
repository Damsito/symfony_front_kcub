<?php

declare(strict_types=1);


namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class CustomAbstractController extends AbstractController
{
    protected function array_all(callable $f, array $xs): bool
    {
        foreach ($xs as $x)
            if (call_user_func($f, $x) === false)
                return false;
        return true;
    }
    protected function getQuery(Request $request): array
    {
        $referer = $request->headers->get('referer');
        $url_components = parse_url($referer);
        $queryArray = array();
        parse_str($url_components['query'], $queryArray);
        $changePage = $request->query->get('changePage', false);
        $page = $request->query->get('page', 1);
        if($page !== 1 && $changePage) {
            $page = $page - 1;
        }

        return array_replace($queryArray, ['page' => $page]);
    }
}