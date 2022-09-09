<?php

declare(strict_types=1);


namespace App\DTO\FormFilter;

use Symfony\Component\HttpFoundation\Request;

class EntrepriseDTOFormFilter
{
    private ?string $type = null;
    private ?string $recherche = null;
    private int $page = 1;

    /**
     * @return string|null
     */
    public function getRecherche(): ?string
    {
        return $this->recherche;
    }

    /**
     * @param string|null $recherche
     */
    public function setRecherche(?string $recherche): void
    {
        $this->recherche = $recherche;
    }

    /**
     * @return string|null
     */
    public function getType(): ?string
    {
        return $this->type;
    }

    /**
     * @param string|null $type
     */
    public function setType(?string $type): void
    {
        $this->type = $type;
    }

    public function getQuery(): array
    {
        $query = [];
        $query['recherche'] = $this->getRecherche();
        $query['page'] = $this->getPage();
        $query['type'] = $this->getType();
        return $query;
    }

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