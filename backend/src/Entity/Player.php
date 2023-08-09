<?php

namespace App\Entity;

use App\Repository\PlayerRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PlayerRepository::class)
 */
class Player
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $position;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $realTeam;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $years;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nationality;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Team", mappedBy="players")
    */
    private $teams;

    /**
    * @ORM\OneToMany(targetEntity="App\Entity\Statistics", mappedBy="player")
    */
    private $statistics;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPosition(): ?string
    {
        return $this->position;
    }

    public function setPosition(string $position): self
    {
        $this->position = $position;

        return $this;
    }

    public function getRealTeam(): ?string
    {
        return $this->realTeam;
    }

    public function setRealTeam(string $realTeam): self
    {
        $this->realTeam = $realTeam;

        return $this;
    }

    public function getYears(): ?string
    {
        return $this->years;
    }

    public function setYears(string $years): self
    {
        $this->years = $years;

        return $this;
    }

    public function getNationality(): ?string
    {
        return $this->nationality;
    }

    public function setNationality(string $nationality): self
    {
        $this->nationality = $nationality;

        return $this;
    }
}
