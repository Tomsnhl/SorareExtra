<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class SorareApiService
{
    private $client;

    public function __construct(HttpClientInterface $client, SorareAuthService $authService, string $email, string $password, string $apiKey)
    {
        $hashedPassword = $authService->getHashedPassword($email, $password);

        $this->client = $client->withOptions([
            'base_uri' => 'https://api.sorare.com/federation/graphql',
            'headers' => [
                'content-type' => 'application/json',
                'email' => $email,
                'password' => $hashedPassword,
                'APIKEY' => $apiKey,
            ],
        ]);
    }

    public function getFootballCards(): array
    {
        $query = '{
            allCards {
                edges {
                    node {
                        id
                        name
                        age
                        positionTyped
                        pictureUrl
                    }
                }
            }
        }';
    
        $response = $this->client->request('POST', '', [
            'json' => [
                'query' => $query,
            ],
        ]);
    
        if ($response->getStatusCode() !== 200) {
            // Gérer l'erreur
        }
    
        return $response->toArray();
    }
}    