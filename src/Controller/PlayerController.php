<?php

namespace App\Controller;

use App\Service\SorareApiService;
use App\Service\SorareAuthService;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PlayerController extends AbstractController
{
    /**
     * @Route("/api/all-cards", name="get_football_cards", methods={"GET"})
     */
    public function getFootballCards(SorareApiService $sorareApiService): JsonResponse
    {
        $cards = $sorareApiService->getFootballCards();
        return new JsonResponse($cards);
    }
}
