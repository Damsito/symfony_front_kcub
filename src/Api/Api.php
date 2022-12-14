<?php

declare(strict_types=1);


namespace App\Api;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Contracts\HttpClient\ResponseInterface;

class Api
{
    public function __construct(
        private string $back_url,
        private string $back_username,
        private string $back_password,
        private HttpClientInterface $client
    )
    {
    }

    /**
     * @throws TransportExceptionInterface
     * @throws ServerExceptionInterface
     * @throws RedirectionExceptionInterface
     * @throws DecodingExceptionInterface
     * @throws ClientExceptionInterface
     */
    private function getToken() : string
    {
        $response = $this->client->request(Request::METHOD_POST, $this->back_url . 'authentication_token', [
            'json' => [
                'username' => $this->back_username,
                'password' => $this->back_password
            ]
        ]);
        $array = $response->toArray(false) ?? [];
        return $array['token'] ?? "";
    }

    /**
     * @throws TransportExceptionInterface
     * @throws ServerExceptionInterface
     * @throws RedirectionExceptionInterface
     * @throws DecodingExceptionInterface
     * @throws ClientExceptionInterface
     */
    private function getClient(): HttpClientInterface
    {
        return $this->client->withOptions([
            'auth_bearer' => $this->getToken(),
            'base_uri' => $this->back_url
        ]);
    }

    /**
     * @throws TransportExceptionInterface
     * @throws ServerExceptionInterface
     * @throws RedirectionExceptionInterface
     * @throws DecodingExceptionInterface
     * @throws ClientExceptionInterface
     */
    public function getAll(string $url, $query = []): array
    {
        return $this->getClient()
            ->request(Request::METHOD_GET, $url . "?" . http_build_query($query))
            ->toArray();
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function delete(string $url): ResponseInterface
    {
        return $this->getClient()
            ->request(Request::METHOD_DELETE, $url);
    }

    /**
     * @throws TransportExceptionInterface
     * @throws ServerExceptionInterface
     * @throws RedirectionExceptionInterface
     * @throws DecodingExceptionInterface
     * @throws ClientExceptionInterface
     */
    public function get(string $url, $query = []){
        return $this->getClient()
            ->request(Request::METHOD_GET, $url . "?" . http_build_query($query))
            ->toArray()
            ;
    }

    /**
     * @throws TransportExceptionInterface
     * @throws ServerExceptionInterface
     * @throws RedirectionExceptionInterface
     * @throws DecodingExceptionInterface
     * @throws ClientExceptionInterface
     */
    public function getOne(string $url)
    {
        return $this->getClient()
            ->request(Request::METHOD_GET, $url)
            ->toArray();
    }
}