<?php

declare(strict_types=1);


namespace App\Service;

use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\RouterInterface;

class QueryService
{
    public function __construct(private readonly RouterInterface $router)
    {
    }

    public function redirect(Request $request, $data): RedirectResponse
    {
        $arr_replace = array_replace($request->query->all(), $data->getQuery());
        $arr_filtered = array_filter($arr_replace, function($v, $k) {
            if($k === 'page'){
                return $v !== 1;
            } else {
                return !is_null($v) && strlen($v) > 0;
            }
        }, ARRAY_FILTER_USE_BOTH);
        return new RedirectResponse($this->router->generate($request->attributes->get('_route'), $arr_filtered));
    }
}