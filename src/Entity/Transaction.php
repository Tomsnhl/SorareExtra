<?php

namespace App\Entity;

use App\Repository\TransactionRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TransactionRepository::class)
 */
class Transaction
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime")
     */
    private $date;

    /**
    * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="transactions")
    * @ORM\JoinColumn(nullable=false)
    */
    private $user;


    /**
    * @ORM\ManyToOne(targetEntity="App\Entity\Shop")
    * @ORM\JoinColumn(nullable=false)
    */
    private $item;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }
}
