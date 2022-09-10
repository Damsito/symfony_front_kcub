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

}