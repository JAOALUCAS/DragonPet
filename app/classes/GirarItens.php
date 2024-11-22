<?php

class GirarItens
{
    private int $moedas;
    
    private int $vitorias;

    private array $raridades;

    const MOEDAS_POR_GIRO = 1;
    
    private $itens = [
        'Comum' => [
            1 => ['Curry Picante', 'Aumenta a velocidade de ataque em 10%'],
            2 => ['Frango Grelhado', 'Aumenta a vida em 4 pontos'],
            3 => ['Ensopado', 'Aumenta a vida em 3 pontos e o ataque em 1 ponto'],
            4 => ['Bandagens', 'Aumenta a vida em 6 pontos'],
            5 => ['Pesos de treinamento', 'Aumenta o ataque em 2 pontos e diminui a velocidade de ataque em 10%'],
            6 => ['Pílula', 'Aumenta a vida em 5 pontos'],
            7 => ['Carne de dinossauro', 'Aumenta o ataque em 3 pontos'],
            8 => ['Arroz Cozido', 'Aumenta a vida em 2 pontos e a velocidade de ataque em 5%'],
            9 => ['Frutas Fresca', 'Aumenta a vida em 3 pontos'],
            10 => ['Legumes Variados', 'Aumenta o ataque em 1 ponto e a vida em 2 pontos'],
            11 => ['Tofu', 'Aumenta a vida em 4 pontos'],
            12 => ['Macarrão Instantâneo', 'Aumenta a velocidade de ataque em 5% e o ataque em 1 ponto']
        ],
        'Incomum' => [
            1 => ['Radar das Esferas do Dragão', 'Permite encontrar uma esfera do dragão a cada 3 batalhas vencidas'],
            2 => ['Medidor de Ki', 'Aumenta o ataque em 2 pontos e a velocidade de ataque em 5%'],
            3 => ['Nuvem do Goku', 'Aumenta a velocidade de ataque em 15%'],
            4 => ['Casco da Tartaruga', 'Aumenta a vida em 10 pontos, mas diminui a velocidade de ataque em 10%'],
            5 => ['Mafuba Jar', 'Tem uma chance de 10% de selar um inimigo por 1 turno'],
            6 => ['Água Sagrada', 'Aumenta o ataque em 3 pontos e a vida em 5 pontos'],
            7 => ['Injeção', 'Aumenta a vida em 8 pontos'],
            8 => ['Battle Armor', 'Aumenta a defesa, reduzindo o dano recebido em 2 pontos por ataque'],
            9 => ['Tree of Might Fruit', 'Aumenta o ataque em 4 pontos e a vida em 2 pontos']
        ],
        'Raro' => [
            1 => ['Espada Z', 'Aumenta o ataque em 5 pontos'],
            2 => ['Cápsula do Tempo', 'Permite reviver um personagem com metade da vida uma vez por batalha'],
            3 => ['Semente dos Deuses', 'Recupera totalmente a vida do personagem uma vez por batalha'],
            4 => ['Brave Sword', 'Aumenta o ataque em 4 pontos e a velocidade de ataque em 5%'],
            5 => ['Brincos Potara', 'Permite fusão com outro personagem, combinando suas vidas e ataques'],
            6 => ['Esfera do Dragão', 'Faça um desejo!'],
            7 => ['Great Saiyaman Costume', 'Aumenta a vida em 6 pontos e o ataque em 3 pontos'],
            8 => ['Weighted Training Clothes', 'Aumenta a vida em 8 pontos, mas diminui a velocidade de ataque em 5%']
        ],
        'Lendário' => [
            1 => ['Super esferas do dragão', 'Faça um desejo super poderoso!']
        ]
    ];
    
    
    public function __construct(int $moedas, int $vitorias)
    {
        $this->moedas = $moedas;

        $this->vitorias = $vitorias;

        $this->gerarPorcentagem();

    }

    private function gerarPorcentagem()
    {
    
        $porcentagens = [];

        //*Representação das raridades em números para facilitar o giro:

        /*
            Comun 44%
            Incomun 44%
            Raro 11%
            Lendário 1%
        */

        $porcentagemPrimeiroItem = random_int(0, 100);

        $porcentagemSegundoItem = random_int(0, 100);

        //*Guardar a string das porcentagens
        array_push($porcentagens, $porcentagemPrimeiroItem, $porcentagemSegundoItem);

        $this->raridades = $this->definirRaridade($porcentagens);

        $this->girarItens();

    }

    private function definirRaridade($porcentagens)
    {
        //*Transformar os números das porcentagens em strings

        foreach ($porcentagens as $item) {

            if ($item < 45) {

                $this->raridades[] = 'Comum';

            } elseif ($item < 88) {

                $this->raridades[] = 'Incomum';

            } elseif ($item <= 99) {

                $this->raridades[] = 'Raro';

            } else {

                $this->raridades[] = 'Lendário';

            }
        }

        return $this->raridades;
    }

    public function girarItens()
    {

        if ($this->moedas < self::MOEDAS_POR_GIRO) {
            //* Retorna um error personalizado.
            throw new Exception('Moedas insuficientes');
        }

        $this->moedas -= self::MOEDAS_POR_GIRO;

        $quaisPegar = [];

        foreach ($this->raridades as $raridade) {

            //* Pegar o número de itens dentro dos arrays
            $index = random_int(1, count($this->itens[$raridade]));

            $quaisPegar[] = $this->itens[$raridade][$index];

        }

        return $quaisPegar;
    }
}
