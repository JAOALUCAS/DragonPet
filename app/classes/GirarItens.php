<?php

class GirarItens
{
    private int $moedas;
    private int $turno;
    
    private $itens = [
        'Comum' => [
            'Curry Picante',
            'Frango Grelhado',
            'Ensopado',
            'Bandagens',
            'Pesos de Treinamento',
            'Pilula',
            'Carne de Dinossauro',
            'Arroz Cozido',
            'Frutas Frescas',
            'Legumes Variados',
            'Tofu',
            'Macarrão Instantâneo'
        ],
        'Incomum' => [
            'Radar das Esferas do Dragão',
            'Medidor de Ki',
            'Nuvem do Goku',
            'Casco da Tartaruga',
            'Mafuba Jar',
            'Água Sagrada',
            'Injeção',
            'Battle Armor',
            'Tree of Might Fruit'
        ],
        'Raro' => [
            'Espada Z',
            'Cápsula do Tempo',
            'Semente dos Deuses',
            'Brave Sword',
            'Brincos Potara',
            'Esfera do Dragão',
            'Great Saiyaman Costume',
            'Weighted Training Clothes'
        ],
        'Lendário' => [
            'Super esféras do dragão'
        ]
    ];
    
    public function __construct(int $moedas, int $turno){
        $this->moedas = $moedas;
        $this->turno = $turno;
    }

    private function girarItens(){

        if($this->moedas >= 5){

            $pegarItens = [];
            $porcentagemFinal = random_int(0,100);
            
            /* 
                Comum:44.44%
                Incomun: 44.44%
                Raro:11.11%
                Lendário: 0,1%
            */

            if($porcentagemFinal <= 89){

                $comumOuIncomun = random_int(1,2);

                if($comumOuIncomun == 1){

                    shuffle($this->itens['comum']);
                    $pegarItens = $this->itens['comum'][0];

                    return $pegarItens;

                }else{

                    shuffle($this->itens['incomum']);
                    $pegarItens = $this->itens['incomum'][0];

                    return $pegarItens;
                }
            }elseif($porcentagemFinal >= 90 && $porcentagemFinal< 99){

                shuffle($this->itens['raro']);
                $pegarItens = $this->itens['raro'][0];

                return $pegarItens;

            }elseif($porcentagemFinal >=99){

                shuffle($this->itens['lendario']);
                $pegarItens = $this->itens['lendario'][0];

                return $pegarItens;
            }

            
        }else {
            echo 'Número de moedas insuficientes.';
            return [];
        }
    }
}