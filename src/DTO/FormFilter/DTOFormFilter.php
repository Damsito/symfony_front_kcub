<?php

declare(strict_types=1);


namespace App\DTO\FormFilter;

class DTOFormFilter
{
    protected int $page = 1;
    /**
     * @return int
     */
    public function getPage(): int
    {
        return $this->page;
    }

    /**
     * @param int $page
     */
    public function setPage(int $page): void
    {
        $this->page = $page;
    }
}