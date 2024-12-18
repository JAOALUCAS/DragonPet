<?php

class GirarCarta
{
    //*Entradas:
    private int $turno;
    private int $moedas;

    //*Variáveis:
    private array $personagensDisponiveis;
    private array $personagensDoTurnoAnterior;
    private int $quantosPegarDoTurnoAnterior;

    //*Constantes:
    const MOEDAS_POR_GIRO = 1;
    const MIN_PERSONAGENS = 1;
    const MAX_PERSONAGENS = 9;

    private static $personagensPorTurno = [
        1 => [
            1 => ['Kuririn criança', 10, 4],
            2 => ['Tao pai pai', 10, 7],
            3 => ['Sr. Satã (Hércules)', 5, 5],
            4 => ['Goku criança', 10, 6],
            5 => ['Yamcha', 7, 4],
            6 => ['Yajirobe', 6, 5],
            7 => ['Mestre Kame (Tarado)', 12, 6],
            8 => ['Tartaruga do Mestre Kame', 4, 3],
            9 => ['Pilaf', 6, 7]
        ],
        2 => [
            1 => ['Androide 18', 20, 10],
            2 => ['Androide 17', 20, 10],
            3 => ['Piccolo', 15, 8],
            4 => ['Vegeta', 18, 12],
            5 => ['Trunks', 16, 9],
            6 => ['Goten', 16, 9],
            7 => ['Gohan', 20, 12],
            8 => ['Mestre Kame (Jovem)', 15, 7],
            9 => ['Chichi', 12, 5]
        ],
        3 => [
            1 => ['Freeza', 25, 15],
            2 => ['Cell', 30, 20],
            3 => ['Majin Boo', 35, 25],
            4 => ['Dabura', 28, 18],
            5 => ['Super Galic.jr', 40, 30],
            6 => ['Tenshinhan', 45, 35],
            7 => ['Goku (Base)', 50, 40],
            8 => ['Vegeta (Base)', 48, 38],
            9 => ['Bardock (Base)', 32, 22]
        ],
        4 => [
            1 => ['Goku (Super Saiyajin Deus)', 60, 50],
            2 => ['Vegeta (Super Saiyajin Deus)', 55, 45],
            3 => ['Trunks (Futuro)', 52, 42],
            4 => ['Gohan (Ultimate)', 58, 48],
            5 => ['Super Rage Shenron', 45, 35],
            6 => ['Goten (Super Saiyajin)', 38, 30],
            7 => ['Kuririn', 30, 22],
            8 => ['Yamcha bandido', 30, 20],
            9 => ['Mestre Kame (Velho)', 25, 18]
        ],
        5 => [
            1 => ['Goku (Super Saiyajin Blue)', 70, 55],
            2 => ['Vegeta (Super Saiyajin Blue)', 65, 50],
            3 => ['Freeza (Golden)', 75, 60],
            4 => ['Cell (Forma Perfeita)', 78, 62],
            5 => ['Majin Boo (Puro)', 80, 65],
            6 => ['Jaco', 75, 58],
            7 => ['Piccolo (Fundido com Kami)', 70, 55],
            8 => ['Gotenks', 68, 52],
            9 => ['Vegetto', 85, 70]
        ],
        6 => [
            1 => ['Goku (Instinto Superior)', 100, 80],
            2 => ['Jiren', 110, 90],
            3 => ['Vegeta (Super Saiyajin Deus Super Saiyajin Evolução)', 105, 85],
            4 => ['Majin Boo (kid)', 95, 75],
            5 => ['Hit', 102, 82],
            6 => ['Toppo', 108, 88],
            7 => ['Bardock (Super Saiyajin)', 98, 78],
            8 => ['Cabba', 90, 70],
            9 => ['Kale (Super Saiyajin Lendário)', 115, 95]
        ],
        7 => [
            1 => ['Goku (Migatte no Gokui Omen)', 120, 100],
            2 => ['Goku Black (Base)', 125, 105],
            3 => ['Gohan (Super Saiyajin 2)', 130, 110],
            4 => ['Broly (Base)', 140, 115],
            5 => ['Gogeta (Super Saiyajin)', 150, 120],
            6 => ['Piccolo (Despertado)', 160, 130],
            7 => ['Eis Shenron', 170, 140],
            8 => ['Zamasu', 145, 118],
            9 => ['Trunks do Futuro (Super Saiyajin Rage)', 135, 112]
        ],
        8 => [
            1 => ['Shallot (Super Saiyajin Blue)', 180, 150],
            2 => ['Nuova Shenron', 175, 145],
            3 => ['Super Janemba', 190, 155],
            4 => ['Gohan (Beast)', 200, 160],
            5 => ['Super 17', 210, 170],
            6 => ['Cooler (Forma Final)', 220, 180],
            7 => ['Super Baby', 230, 190],
            8 => ['Gamma 2', 230, 190], 
            9 => ['Gamma 1', 230, 190]
        ],
        9 => [
            1 => ['Omega Shenron', 250, 200],
            2 => ['Zamazasu Fusão', 240, 195],
            3 => ['Gogeta (Super Saiyajin 4)', 260, 215],
            4 => ['Broly (Super Saiyajin Lendário)', 270, 220],
            5 => ['Gogeta (Super Saiyajin Blue)', 280, 230],
            6 => ['Bills', 290, 240],
            7 => ['Whis', 300, 250],
            8 => ['Champa', 290, 240],
            9 => ['Vados', 300, 250]
        ]
        ];

    

    public function __construct(int $turno, int $moedas)
    {
        $this->turno = $turno;

        $this->moedas = $moedas;

        $this->chamarMetodos();

    }

    private function chamarMetodos()
    {
        $this->decidirGirarDoTurnoAnteriorEQuantos();

        if(isset($this->quantosPegarDoTurnoAnterior)){

            $this->guardarPersonagensDoTurnoAtual(); 

            $this->guardarPersonagensDoTurnoAnterior();

        }else {

            $this->guardarPersonagensDoTurnoAtual(); 

        }

    }

    private function decidirGirarDoTurnoAnteriorEQuantos()
    {
        //* 0 representa pegar do anterior
        //* 1 representa girar normalmente
        $verificarSePrecisapegarPersonagensDoAnterior = random_int(0,1);

        if($verificarSePrecisapegarPersonagensDoAnterior == 0){

            $this->quantosPegarDoTurnoAnterior = random_int(1,2);
            return $this->quantosPegarDoTurnoAnterior;

        }
    }

    private function guardarPersonagensDoTurnoAtual()
    {
        //*Self pelo uso de atributo static.
        $this->personagensDisponiveis = self::$personagensPorTurno[$this->turno];
        
        return $this->personagensDisponiveis;
    }
    
    private function guardarPersonagensDoTurnoAnterior()
    {
        //*Não existe turno antes do primeiro.
        if($this->turno > 1){
            $this->personagensDoTurnoAnterior = self::$personagensPorTurno[$this->turno-1];

            return $this->personagensDoTurnoAnterior;
        }

    }


    public function girarCarta(){

        if($this->moedas < self::MOEDAS_POR_GIRO){
            //* Retorna um error personalizado.
            throw new Exception('Moedas insuficientes');

        }

        $this->moedas -= self::MOEDAS_POR_GIRO;
        //*Uma maneira de sempre retornar o valor de giros por turno.
        if($this->turno < 5){

            $decidirQuantosGirar = 3;

        }else{

            $decidirQuantosGirar = 5;
            
        }

        if(isset($this->personagensDoTurnoAnterior)){

            for($i=1;$i<=$this->quantosPegarDoTurnoAnterior;$i++){

                $quaisPegar [] =  random_int(self::MIN_PERSONAGENS,self::MAX_PERSONAGENS);

            }

            //!2 ou 1 personagem é guardado.
            foreach($quaisPegar as $indice){
                
                $personagensEscolhidos[] = $this->personagensDoTurnoAnterior[$indice];
                
            }
            //!Ou pode faltar 1-2 ou 3-4.
            $quantosFaltam = $decidirQuantosGirar - count($personagensEscolhidos);
            //! quantosFaltam pode retornar 2-1 ou 4-3
            $quaisPegar = [];

            for($i=1;$i<=$quantosFaltam;$i++){
                
                $quaisPegar[] = random_int(self::MIN_PERSONAGENS,self::MAX_PERSONAGENS);
                
            }
                
            foreach($quaisPegar as $indice){
                
                $personagensEscolhidos[] = $this->personagensDisponiveis[$indice];
                
            }

            return $personagensEscolhidos;

        }else{

            //! 3 ou 5
            for($i=1;$i<=$decidirQuantosGirar;$i++){

                $quaisPegar[] = random_int(self::MIN_PERSONAGENS,self::MAX_PERSONAGENS);

            }

            foreach($quaisPegar as $indice){

                $personagensEscolhidos[] = $this->personagensDisponiveis[$indice];
                
            }

            return $personagensEscolhidos;

        }
    }
}
