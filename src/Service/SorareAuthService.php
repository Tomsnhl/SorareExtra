<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class SorareAuthService
{
    private $client;

    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client;
    }

    public function getSalt(string $email): string
    {
        $response = $this->client->request('GET', "https://api.sorare.com/api/v1/users/$email");
        $data = $response->toArray();
        return $data["salt"] ?? '';
    }

    public function getHashedPassword(string $email, string $password): string
    {
        $salt = $this->getSalt($email);
        $options = [
            'cost' => 12,
            'salt' => $salt,
        ];
        return password_hash($password, PASSWORD_BCRYPT, $options);
    }
}
