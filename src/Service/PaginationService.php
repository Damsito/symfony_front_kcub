<?php

declare(strict_types=1);


namespace App\Service;

class PaginationService
{
    public function getPages(array $hydra_view): array
    {
        $firstPage = isset($hydra_view['hydra:first']) ? $this->getPage($hydra_view['hydra:first']) : null;
        $previousPage = isset($hydra_view['hydra:previous']) ? $this->getPage($hydra_view['hydra:previous']) : null;
        $nextPage = isset($hydra_view['hydra:next']) ? $this->getPage($hydra_view['hydra:next']) : null;
        $currentPage = isset($hydra_view['@id']) ? $this->getPage($hydra_view['@id']) : 1;
        $lastPage = isset($hydra_view['hydra:last']) ? $this->getPage($hydra_view['hydra:last']) : null;
        return [
            'firstPage' => $firstPage,
            'previousPage' => $previousPage,
            'currentPage' => $currentPage,
            'nextPage' => $nextPage,
            'lastPage' => $lastPage,
        ];
    }

    private function getPage(string $uri): ?string
    {
        $text = explode('page=', $uri);
        return $text[1] ?? null;
    }
}