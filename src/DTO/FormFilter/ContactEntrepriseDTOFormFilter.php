<?php

declare(strict_types=1);


namespace App\DTO\FormFilter;

class ContactEntrepriseDTOFormFilter extends DTOFormFilter
{
    public const ASC = "asc";
    public const DESC = "desc";
    private ?string $sort = self::ASC;
    private ?string $recherche = null;

    /**
     * @return string|null
     */
    public function getSort(): ?string
    {
        return $this->sort;
    }

    /**
     * @param string|null $sort
     */
    public function setSort(?string $sort): void
    {
        $this->sort = $sort;
    }

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

    public function getQuery(): array
    {
        $query = [];
        $query['recherche'] = $this->getRecherche();
        $query['page'] = $this->getPage();
        $query['sort'] = $this->getSort();
        return $query;
    }
}