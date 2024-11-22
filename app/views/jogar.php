<?php 

session_start();

$id = $_SESSION["id"];

require_once "../conf/Conexao.php";

$mysql = "SELECT * FROM inventario WHERE id_jogador = :id";

$pdo = Conexao::conectar('../conf/conf.ini');

$stmt = $pdo->prepare($mysql);

$stmt->execute([":id" => $id]);

$itens = $stmt->fetchAll(PDO::FETCH_ASSOC);

$url = "../../public/assets/css/cards/card1.css";

if (!empty($itens)) {

    for($i = 0; $i < count($itens); $i++){

        if($itens[$i]["categoria"] == "card" && $itens[$i]["equipado"] == "equipado"){
                
            if(trim($itens[$i]["nome_item"]) == "Card futurista"){

               $url = " ../../public/assets/css/cards/card2.css";

            }elseif(trim($itens[$i]["nome_item"]) == "Card Dourado"){

                $url = "../../public/assets/css/cards/card3.css";

            }elseif(trim($itens[$i]["nome_item"]) == "Card Oriental"){

                $url = "../../public/assets/css/cards/card4.css";

            }

            $card = str_replace(' ', '', $itens[$i]["nome_item"]);

        }
    }

}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DragonPet - Preparar time</title>
    <link rel="shortcut icon" href="../../public/assets/midias/ico/dg.ico" type="image/x-icon">
    <link rel="stylesheet" href="../../public/assets/css/preparar-time-style.css">
    <link rel="stylesheet" href="../../public/assets/css/animacao-load.css">
    <link rel="stylesheet" href="../../public/assets/css/itens.css">
    <link rel="stylesheet" href="../../public/assets/css/menu.css">
    <link rel="stylesheet" href="<?php echo $url?>">
    <script src="../../public/assets/js/click.js"></script>
    <script src="../../public/assets/js/menu.js"></script>
    <script src="../../public/assets/js/musicas.js"></script>
    <script src="../../public/assets/js/prepararTime/jogar.js"></script>
    <script src="../../public/assets/js/prepararTime/formAtualizarPersonagem.js"></script>
    <script src="../../public/assets/js/prepararTime/formAtualizarItem.js"></script>
    <script src="../../public/assets/js/prepararTime/salvarEstado.js"></script>
    <script src="../../public/assets/js/prepararTime/buscarEstado.js"></script>
    <script src="../../public/assets/js/prepararTime/itens.js"></script>
    <script src="../../public/assets/js/prepararTime/variaveis.js"></script>
    <script src="../../public/assets/js/prepararTime/animacaoLoad.js"></script>
    <script src="../../public/assets/js/prepararTime/categoria.js"></script>
</head>
<body>

    <div id="load-cima" class="load hidden load-cima"></div>
    <div id="load-baixo" class="load hidden load-baixo"></div>

    <div class="container" id="container">
        
        <div class="background"></div>

        <div class="variaveis">

            <div class="variavel moeda"><img src="../../public/assets/midias/icons/moeda.png">
                <p id="moeda"></p>
            </div>

            <i id="vidaI">❤️</i>

            <div class="variavel vida">

                <p id="vida"></p>

            </div>
    
            <i id="turnoI">⌛</i>

            <div class="variavel turno">

                <p id="turno"></p>

            </div>
    
            <i id="vitoriasI">🏆</i>

            <div class="variavel vitorias">

                <p id="vitorias"></p>

            </div>

            <div class="variavel nome-time"><?php echo  isset($_SESSION["titulo"]) ? trim($_SESSION["titulo"]) : trim($_SESSION["nome"]) ?></div>

        </div>

        <div class="time">

            <div class="ceramicas"></div>

            <div class="ceramicas slots slot1"></div>

            <div class="ceramicas slots slot2"></div>

            <div class="ceramicas slots slot3"></div>

            <div class="ceramicas slots slot4"></div>

            <div class="ceramicas slots slot5"></div>

            <div class="ceramicas slots slot5"></div>

            <div class="ceramicas"></div>

            <div class="ceramicas"></div>

        </div>

        <div class="escolhas">
            
            <div class="personagens">

                <div class="ceramicas"></div>

                <div class="ceramicas"></div>

                <div class="ceramicas"></div>

                <div class="ceramicas"></div>

                <div class="ceramicas"></div>

                <div class="ceramicas"></div>

                <div class="ceramicas"></div>

                <div class="ceramicas"></div>

                <div class="ceramicas"></div>

            </div>

            <div class="itens">
            </div>

        </div>

        <div class="placa placa-batalha">Batalha</div>

        <div class="poste poste-batalha"></div>

        <div class="sombra sombra-batalha"></div>

        <div class="placa placa-loja">Loja</div>

        <div class="poste poste-loja"></div>

        <div class="sombra sombra-loja"></div>
        
        <div class="buttons-baixo">
            
            <form id="formAtualizar">
                
                <input type="hidden" name="girar">

                <button id="atualizar"><img src="../../public/assets/midias/icons/icons8-dado-60.png">

                    <span>Atualizar</span>

                </button>

            </form>

            <div class="parece-atualizar">

                <button id="parece-atualizar"><img src="../../public/assets/midias/icons/icons8-dado-60.png">

                    <span>Atualizar</span>

                </button>

            </div>

            <button id="congelar"><img src="../../public/assets/midias/icons/icons8-snowflake-50.png">Congelar</button>

            <button id="vender"><img src="../../public/assets/midias/icons/icons8-bilhete-50.png">Vender</button>

            <button id="descongelar"><img src="../../public/assets/midias/icons/gotas-de-agua.png">Descongelar</button>

            <form>

                <input type="hidden" name="finalizarTurno">

                <button id="finalizar">Finalizar turno<img src="../../public/assets/midias/icons/espadas.png"></button>

            </form>

        </div>

        <div class="buttons-cima">

            <button id="categoriaBtn"><img src="../../public/assets/midias/icons/icons8-estrela-48.png"></button>

            <div class="config">

                <button id="menu"><img src="../../public/assets/midias/icons/icons8-linhas-50.png"></button>
    
            </div>

        </div>

        <div class="categoria-personagens">

            <h1 id="hf" >Personagens</h1>
            
            <div class="frasePerson"></div>

            <div class="personagens-turno">

                <div class="personagem-turno personagem-turno1">

                    <div class="turno-titulo">

                        <img class="dados" src="../../public/assets//midias/icons/dado-face1.png">

                        <h1>Turno</h1>

                    </div>

                    <img id="Kuririncriança" class="pImg" src="../../public/assets/midias/personagens/Kuririn criança.webp">

                    <img id="Taopaipai" class="pImg" src="../../public/assets/midias/personagens/Tao pai pai.webp">

                    <img id="Sr.Satã(Hércules)" class="pImg" src="../../public/assets/midias/personagens/Sr. Satã (Hércules).webp">

                    <img id="Gokucriança" class="pImg" src="../../public/assets/midias/personagens/Goku criança.webp">

                    <img id="Yamcha" class="pImg" src="../../public/assets/midias/personagens/Yamcha.webp">

                    <img id="Yajirobe" class="pImg" src="../../public/assets/midias/personagens/Yajirobe.webp">

                    <img id="MestreKame(Tarado)" class="pImg" src="../../public/assets/midias/personagens/Mestre Kame (Tarado).webp">

                    <img id="diferente-img1" class="pImg" src="../../public/assets/midias/personagens/Tartaruga do Mestre Kame.png">
                    
                    <img id="diferente-img2" class="pImg" src="../../public/assets/midias/personagens/Pilaf.png">

                </div>

                <div class="personagem-turno personagem-turno2">

                    <div class="turno-titulo">

                        <img class="dados" src="../../public/assets//midias/icons/dado-face2.png">

                        <h1>Turno</h1>

                    </div>

                    <img id="Androide18" class="pImg" src="../../public/assets/midias/personagens/Androide 18.webp">

                    <img id="Androide17" class="pImg" src="../../public/assets/midias/personagens/Androide 17.webp">

                    <img id="Piccolo" class="pImg" src="../../public/assets/midias/personagens/Piccolo.webp">

                    <img id="Vegeta" class="pImg" src="../../public/assets/midias/personagens/Vegeta.webp">

                    <img id="Trunks" class="pImg" src="../../public/assets/midias/personagens/Trunks.webp">

                    <img id="Goten" class="pImg" src="../../public/assets/midias/personagens/Goten.webp">

                    <img id="Gohan" class="pImg" src="../../public/assets/midias/personagens/Gohan.webp">

                    <img id="MestreKame(Jovem)" class="pImg" src="../../public/assets/midias/personagens/Mestre Kame (Jovem).webp">

                    <img id="Chichi" class="pImg" src="../../public/assets/midias/personagens/Chichi.webp">

                </div>

                <div class="personagem-turno personagem-turno3">

                    <div class="turno-titulo">

                        <img class="dados" src="../../public/assets//midias/icons/dado-face3.png">

                        <h1>Turno</h1>

                    </div>

                    <img id="Freeza" class="pImg" src="../../public/assets/midias/personagens/Freeza.webp">

                    <img id="Cell" class="pImg" src="../../public/assets/midias/personagens/Cell.webp">

                    <img id="MajinBoo" class="pImg" src="../../public/assets/midias/personagens/Majin Boo.webp">

                    <img id="Dabura" class="pImg" src="../../public/assets/midias/personagens/Dabura.webp">

                    <img id="SuperGalic.jr" class="pImg" src="../../public/assets/midias/personagens/Super Galic.jr.webp">

                    <img id="Tenshinhan" class="pImg" src="../../public/assets/midias/personagens/Tenshinhan.webp">

                    <img id="Goku(Base)" class="pImg" src="../../public/assets/midias/personagens/Goku (Base).webp">

                    <img id="Vegeta(Base)" class="pImg" src="../../public/assets/midias/personagens/Vegeta (Base).webp">


                    <img id="Bardock(Base)" class="pImg" src="../../public/assets/midias/personagens/Bardock (Base).webp">

                </div>

                <div class="personagem-turno personagem-turno4">

                    <div class="turno-titulo">

                        <img class="dados" src="../../public/assets//midias/icons/dado-face4.png">

                        <h1>Turno</h1>

                    </div>

                    <img id="Goku(SuperSaiyajinDeus)" class="pImg" src="../../public/assets/midias/personagens/Goku (Super Saiyajin Deus).webp">

                    <img id="Vegeta(SuperSaiyajinDeus)" class="pImg" src="../../public/assets/midias/personagens/Vegeta (Super Saiyajin Deus).webp">

                    <img id="Trunks(Futuro)" class="pImg" src="../../public/assets/midias/personagens/Trunks (Futuro).webp">

                    <img id="Gohan(Ultimate)" class="pImg" src="../../public/assets/midias/personagens/Gohan (Ultimate).webp">

                    <img id="SuperRageShenron" class="pImg" src="../../public/assets/midias/personagens/Super Rage Shenron.webp">

                    <img id="Goten(SuperSaiyajin)" class="pImg" src="../../public/assets/midias/personagens/Goten (Super Saiyajin).webp">

                    <img id="Kuririn" class="pImg" src="../../public/assets/midias/personagens/Kuririn.webp">

                    <img id="Yamchabandido" class="pImg" src="../../public/assets/midias/personagens/Yamcha bandido.webp">

                    <img id="MestreKame(Velho)" class="pImg" src="../../public/assets/midias/personagens/Mestre Kame (Velho).webp">

                </div>

                <div class="personagem-turno personagem-turno5">

                    <div class="turno-titulo">

                        <img class="dados" src="../../public/assets//midias/icons/dado-face5.png">

                        <h1>Turno</h1>

                    </div>

                    <img id="Goku(SuperSaiyajinBlue)" class="pImg" src="../../public/assets/midias/personagens/Goku (Super Saiyajin Blue).webp">

                    <img id="Vegeta(SuperSaiyajinBlue)" class="pImg" src="../../public/assets/midias/personagens/Vegeta (Super Saiyajin Blue).webp">

                    <img id="Freeza(Golden)" class="pImg" src="../../public/assets/midias/personagens/Freeza (Golden).webp">

                    <img id="Cell(FormaPerfeita)" class="pImg" src="../../public/assets/midias/personagens/Cell (Forma Perfeita).webp">

                    <img id="MajinBoo(Puro)" class="pImg" src="../../public/assets/midias/personagens/Majin Boo (Puro).webp">

                    <img id="Jaco" class="pImg" src="../../public/assets/midias/personagens/Jaco.webp">

                    <img id="Piccolo(FundidocomKami)" class="pImg" src="../../public/assets/midias/personagens/Piccolo (Fundido com Kami).webp">

                    <img id="Gotenks" class="pImg" src="../../public/assets/midias/personagens/Gotenks.webp">

                    <img id="Vegetto" class="pImg" src="../../public/assets/midias/personagens/Vegetto.webp">

                </div>

                <div class="personagem-turno personagem-turno6">
                
                    <div class="turno-titulo">
                                
                        <img class="dados" src="../../public/assets//midias/icons/dado-face6.png">

                        <h1>Turno</h1>

                    </div>

                    <img id="GokuInstintoSuperior" class="pImg"  src="../../public/assets/midias/personagens/Goku (Instinto Superior).webp">

                    <img id="Jiren" class="pImg"  src="../../public/assets/midias/personagens/Jiren.webp">

                    <img id="VegetaSuperSaiyajinDeusSuperSaiyajinEvolução" class="pImg"  src="../../public/assets/midias/personagens/Vegeta (Super Saiyajin Deus Super Saiyajin Evolução).webp">

                    <img id="MajinBooKid" class="pImg"  src="../../public/assets/midias/personagens/Majin Boo (kid).webp">

                    <img id="Hit" class="pImg"  src="../../public/assets/midias/personagens/Hit.webp">

                    <img id="Toppo" class="pImg"  src="../../public/assets/midias/personagens/Toppo.webp">

                    <img id="BardockSuperSaiyajin" class="pImg"  src="../../public/assets/midias/personagens/Bardock (Super Saiyajin).webp">

                    <img id="Cabba" class="pImg"  src="../../public/assets/midias/personagens/Cabba.webp">

                    <img id="KaleSuperSaiyajinLendário" class="pImg"  src="../../public/assets/midias/personagens/Kale (Super Saiyajin Lendário).webp">

                </div>

                <div class="personagem-turno personagem-turno7">
                
                    <div class="turno-titulo">

                        <div class="agrupar">

                            <img class="ag1" src="../../public/assets//midias/icons/dado-face6.png">

                            <img class="ag2" src="../../public/assets//midias/icons/dado-face1.png">

                        </div>

                        <h1>Turno</h1>

                    </div>

                    <img id="GokuMigatteNoGokuiOmen" class="pImg"  src="../../public/assets/midias/personagens/Goku (Migatte no Gokui Omen).webp">

                    <img id="GokuBlackBase" class="pImg"  src="../../public/assets/midias/personagens/Goku Black (Base).webp">

                    <img id="GohanSuperSaiyajin2" class="pImg"  src="../../public/assets/midias/personagens/Gohan (Super Saiyajin 2).webp">
                    
                    <img id="BrolyBase" class="pImg"  src="../../public/assets/midias/personagens/Broly (Base).webp">

                    <img id="GogetaSuperSaiyajin" class="pImg"  src="../../public/assets/midias/personagens/Gogeta (Super Saiyajin).webp">

                    <img id="PiccoloDespertado" class="pImg"  src="../../public/assets/midias/personagens/Piccolo (Despertado).webp">

                    <img id="EisShenron" class="pImg"   src="../../public/assets/midias/personagens/Eis Shenron.webp">

                    <img id="Zamasu" class="pImg"  src="../../public/assets/midias/personagens/Zamasu.webp">

                    <img id="TrunksDoFuturoSuperSaiyajinRage" class="pImg"  src="../../public/assets/midias/personagens/Trunks do Futuro (Super Saiyajin Rage).webp">

                </div>

                <div class="personagem-turno personagem-turno8">

                    <div class="turno-titulo">

                        <div class="agrupar">

                            <img class="ag1" src="../../public/assets//midias/icons/dado-face6.png">

                            <img class="ag2" src="../../public/assets//midias/icons/dado-face2.png">

                        </div>

                        <h1>Turno</h1>

                    </div>

                    <img id="ShallotSuperSaiyajinBlue" class="pImg" src="../../public/assets/midias/personagens/Shallot (Super Saiyajin Blue).webp">

                    <img id="NuovaShenron" class="pImg" src="../../public/assets/midias/personagens/Nuova Shenron.webp">

                    <img id="SuperJanemba" class="pImg" src="../../public/assets/midias/personagens/Super Janemba.webp">

                    <img id="GohanBeast" class="pImg" src="../../public/assets/midias/personagens/Gohan (Beast).webp">

                    <img id="Super17" class="pImg" src="../../public/assets/midias/personagens/Super 17.webp">

                    <img id="CoolerFormaFinal" class="pImg" src="../../public/assets/midias/personagens/Cooler (Forma Final).webp">

                    <img id="SuperBaby" class="pImg" src="../../public/assets/midias/personagens/Super Baby.webp">

                    <img id="Gamma2" class="pImg" src="../../public/assets/midias/personagens/Gamma 2.webp">

                    <img id="Gamma1" class="pImg" src="../../public/assets/midias/personagens/Gamma 1.webp">

                </div>

                <div class="personagem-turno personagem-turno9">

                    <div class="turno-titulo">

                        <div class="agrupar">

                            <img class="ag1" src="../../public/assets//midias/icons/dado-face6.png">

                            <img class="ag2" src="../../public/assets//midias/icons/dado-face3.png">

                        </div>

                        <h1>Turno</h1>

                    </div>

                    <img id="OmegaShenron" class="pImg" src="../../public/assets/midias/personagens/Omega Shenron.webp">

                    <img id="ZamazasuFusao" class="pImg" src="../../public/assets/midias/personagens/Zamazasu Fusão.webp">

                    <img id="GogetaSuperSaiyajin4" class="pImg" src="../../public/assets/midias/personagens/Gogeta (Super Saiyajin 4).webp">

                    <img id="BrolySuperSaiyajinLendario" class="pImg" src="../../public/assets/midias/personagens/Broly (Super Saiyajin Lendário).webp">

                    <img id="GogetaSuperSaiyajinBlue" class="pImg" src="../../public/assets/midias/personagens/Gogeta (Super Saiyajin Blue).webp">

                    <img id="Bills" class="pImg" src="../../public/assets/midias/personagens/Bills.webp">

                    <img id="Whis" class="pImg" src="../../public/assets/midias/personagens/Whis.webp">

                    <img id="Champa" class="pImg" src="../../public/assets/midias/personagens/Champa.webp">

                    <img id="Vados" class="pImg"  src="../../public/assets/midias/personagens/Vados.webp">

                </div>

            </div>

            <div class="itens-raridade">

                <div class="item-raridade">

                    <div class="turno-titulo">

                        <img class="dados" src="../../public/assets//midias/icons/icons8-estrela-50.png">

                        <h1>Comum</h1>

                    </div>

                    <img class="iImg" id="Curry" src="../../public/assets/midias/itens/Curry Picante.png">
                    
                    <img class="iImg" id="Frango" src="../../public/assets/midias/itens/Frango Grelhado.png">
                    
                    <img class="iImg" id="Ensopado" src="../../public/assets/midias/itens/Ensopado.png">
                    
                    <img class="iImg" id="Bandagens" src="../../public/assets/midias/itens/Bandagens.png">
                    
                    <img class="iImg" id="Peso" src="../../public/assets/midias/itens/Pesos de treinamento.png">
                    
                    <img class="iImg" id="Pilula" src="../../public/assets/midias/itens/Pílula.png">
                    
                    <img class="iImg" id="Dinossauro" src="../../public/assets/midias/itens/Carne de dinossauro.png">
                    
                    <img class="iImg" id="Arroz" src="../../public/assets/midias/itens/Arroz Cozido.png">
                    
                    <img class="iImg" id="Frutas" src="../../public/assets/midias/itens/Frutas Fresca.png">
                    
                    <img class="iImg" id="Legumes" src="../../public/assets/midias/itens/Legumes Variados.png">
                    
                    <img class="iImg" id="Tofu" src="../../public/assets/midias/itens/Tofu.png">
                    
                    <img class="iImg" id="Macarrao" src="../../public/assets/midias/itens/Macarrão Instantâneo.png">

                </div>
                
                <div class="item-raridade">

                    <div class="turno-titulo">

                        <img class="dados" src="../../public/assets//midias/icons/icons8-estrela-50.png">

                        <img class="dados" src="../../public/assets//midias/icons/icons8-estrela-50.png">

                        <h1>Incomum</h1>

                    </div>

                    <img class="iImg" id="Radar" src="../../public/assets/midias/itens/Radar das Esferas do Dragão.png">
                    
                    <img class="iImg" id="Medidor" src="../../public/assets/midias/itens/Medidor de Ki.png">
                    
                    <img class="iImg" id="Nuvem" src="../../public/assets/midias/itens/Nuvem do Goku.png">
                    
                    <img class="iImg" id="Casco" src="../../public/assets/midias/itens/Casco da Tartaruga.png">
                    
                    <img class="iImg" id="Mafuba" src="../../public/assets/midias/itens/Mafuba Jar.png">
                    
                    <img class="iImg" id="Sagrada" src="../../public/assets/midias/itens/Água Sagrada.png">
                    
                    <img class="iImg" id="Injecao" src="../../public/assets/midias/itens/Injeção.png">
                    
                    <img class="iImg" id="Battle" src="../../public/assets/midias/itens/Battle Armor.png">
                    
                    <img class="iImg" id="Tree" src="../../public/assets/midias/itens/Tree of Might Fruit.png">

                </div>

                <div class="item-raridade">

                    <div class="turno-titulo">

                        <img class="dados" src="../../public/assets//midias/icons/icons8-estrela-50.png">

                        <img class="dados" src="../../public/assets//midias/icons/icons8-estrela-50.png">

                        <img class="dados" src="../../public/assets//midias/icons/icons8-estrela-50.png">

                        <h1 id="raro">Raro</h1>

                    </div>

                    <img class="iImg" id="Espada" src="../../public/assets/midias/itens/Espada Z.png">
                    
                    <img class="iImg" id="Capsula" src="../../public/assets/midias/itens/Cápsula do Tempo.png">
                    
                    <img class="iImg" id="Semente" src="../../public/assets/midias/itens/Semente dos Deuses.png">
                    
                    <img class="iImg" id="Brave" src="../../public/assets/midias/itens/Brave Sword.png">
                    
                    <img class="iImg" id="Brincos" src="../../public/assets/midias/itens/Brincos Potara.png">
                    
                    <img class="iImg" id="Esfera" src="../../public/assets/midias/itens/Esfera do Dragão.png">
                    
                    <img class="iImg" id="Great" src="../../public/assets/midias/itens/Great Saiyaman Costume.png">
                    
                    <img class="iImg" id="Weighted" src="../../public/assets/midias/itens/Weighted Training Clothes.png">

                </div>

                <div class="item-raridade">

                    <div class="turno-titulo">

                        <img class="dados" src="../../public/assets//midias/icons/icons8-estrela-50.png">

                        <img class="dados" src="../../public/assets//midias/icons/icons8-estrela-50.png">

                        <img class="dados" src="../../public/assets//midias/icons/icons8-estrela-50.png">

                        <img class="dados" src="../../public/assets//midias/icons/icons8-estrela-50.png">

                        <h1 id="lenda">Lendário</h1>

                    </div>
                    
                    <img class="iImg" id="ses" src="../../public/assets/midias/itens/Super esferas do dragão.png">

                </div>

            </div>

            <div class="opcoes-categoria">

                <div class="pC">

                    <button id="pc">Personagens ☑</button>

                </div>

            </div>

            <div class="voltar">

                <button id="voltarPersonagem"><img src="../../public/assets/midias/icons/icons8-voltar-64.png">Voltar</button>

            </div>

        </div>

        
        <div class="menu">

            <ul>

                <li id="close-menu">
                    
                    <img src="../../public/assets/midias/icons/icons8-x2-48.png">

                    <p>Fechar</p>

                </li>

                <li class="rederecionar" id="rederecionar-config">

                    <img src="../../public/assets/midias/icons/icons8-engrenagem-50.png">

                    <p>Configurações</p>

                </li>

                <li class="rederecionar" id="rederecionar-historico">

                    <img src="../../public/assets/midias/icons/icons8-relógio-30.png">

                    <p>Histórico</p>

                </li>

                <li class="rederecionar" id="rederecionar-conta">
                    
                    <img src="../../public/assets/midias/icons/icons8-pessoa-48.png">

                    <p>Perfil</p>

                </li>


                <li>

                    <img src="../../public/assets/midias/icons/icons8-casa-50.png">

                    <p><a href="../../public/index.html"></a>Home</p>

                </li>

            </ul>

        </div>

        <div class="config-menu">

            <div class="opcoes">

                <ul>

                    <li id="checkConfig">

                        <img src="../../public/assets/midias/icons/icons8-engrenagem2-50.png"> Configurações

                    </li>

                    <li id="checkHistori">

                        <img src="../../public/assets/midias/icons/icons8-relógio2-60.png"> Histórico

                    </li>

                    <li id="checkPerfil">

                        <img src="../../public/assets/midias/icons/icons8-pessoa2-48.png"> Perfil

                    </li>

                    <li id="fechar-menu">

                        <img src="../../public/assets/midias/icons/icons8-x-48.png"> Fechar

                    </li>

                </ul>

            </div>

            <div class="config-opcoes">

                <div class="game-opcoes">

                    <h1>Configurações do jogo</h1>

                    <div class="tela-cheia">

                        <img src="../../public/assets/midias/icons/icons8-tela-cheia-64.png">

                        <div class="texto">
                            
                            <h2>Tela cheia</h2>

                            <p>Deixe a tela cheia para uma experiência mais imersiva</p>

                        </div>

                        <div class="toggle-container toggle-tela">

                            <input type="checkbox" id="checkTela">

                            <label for="checkTela" class="toggle"></label>

                        </div>

                    </div>

                    <div class="audio">

                        <img src="../../public/assets/midias/icons/icons8-volume-alto-50.png">

                        <div class="texto">

                            <h2>Audio</h2>

                            <p>Você pode mutar o som do jogo se te incomodar</p>

                        </div>

                        <div class="toggle-container toggle-audio">

                            <input type="checkbox" id="checkAudio">

                            <label for="checkAudio" class="toggle"></label>
                            
                        </div>

                    </div>

                    <div class="musica">

                        <img src="../../public/assets/midias/icons/icons8-música-48.png">

                        <div class="texto">
                                
                            <h2>Musica</h2>

                            <p>Você pode mutar o som da música se te incomodar</p>

                        </div>

                        <div class="toggle-container toggle-musica">

                            <input type="checkbox" id="checkMusica">

                            <label for="checkMusica" class="toggle"></label>
                            
                        </div>

                    </div>
                    

                </div>

                <div class="historico-opcoes">

                    <h1>Registro de batalha</h1>

                    <div class="batalhas">
                            
                        <div class="batalha">

                            <h2>Resultado</h2>

                            <div class="jogadores">
                    
                                <div class="foto-perfil"></div>

                                <img src="../../public/assets/midias/icons/icons8-batalha-64.png">
                                
                                <div class="foto-perfil"></div>

                            </div>

                        </div>

                    </div>

                </div>

                <div class="perfil-opcoes">

                    <h1>Configurações da conta</h1>

                    <div class="excluir-conta">

                        <img src="../../public/assets/midias/icons/icons8-lixeira-48.png">

                        <div class="texto">
                                
                            <h2>Excluir conta</h2>

                            <p>Se deseja excluir sua conta <a href="">clique aqui</a></p>
                        
                        </div>

                    </div>
                    
                    <div class="mudar-senha">

                        <img src="../../public/assets/midias/icons/icons8-cadeado-aberto-48.png">

                        <div class="texto">
                                
                            <h2>Mudar senha</h2>

                            <p>Se deseja alterar a senha da sua conta <a href="">clique aqui</a></p>
                        
                        </div>


                    </div>

                </div>

            </div>

        </div>


        <div class="gelo gelo1">
            <img src="../../public/assets/midias/icons/icons8-gelo-64.png">
        </div>

        <div class="gelo gelo2">
            <img src="../../public/assets/midias/icons/icons8-gelo-64.png">
        </div>

        <div class="gelo gelo3">
            <img src="../../public/assets/midias/icons/icons8-gelo-64.png">
        </div>

        <div class="gelo gelo4">
            <img src="../../public/assets/midias/icons/icons8-gelo-64.png">
        </div>

        <div class="gelo gelo5">
            <img src="../../public/assets/midias/icons/icons8-gelo-64.png">
        </div>

        <div class="gelo gelo6">
            <img src="../../public/assets/midias/icons/icons8-gelo-64.png">
        </div>

        <div class="gelo gelo7">
            <img src="../../public/assets/midias/icons/icons8-gelo-64.png">
        </div>

        <template id="Cardfuturista">
            
            <div class='card card$i'>

                <div class='background'>

                    <img src='../../public/assets/midias/imgs/abstract-triangle-texture-seamless-pattern-white_13364-156.avif'>

                </div>

                <div class='header'>

                    <img src='../../public/assets/midias/imgs/Dragon_Ball_anime_logo.png'>

                </div>
                
                <div class="foto-personagem">

                    <img class="foto-p" src="">

                </div>
                
                <div class='var-per'>
                
                    <div class='var def'>
                            
                        <h1>DEF</h1>

                        <p class="vidap">$vida</p>

                    </div>

                    <div class='var ataque'>

                        <h1>ATK</h1>

                        <p class="ataquep">$ataque</p>

                    </div>

                    <div class='icon'>

                        <img src='../../public/assets/midias/imgs/ico.jpg'>

                    </div>

                    <div class='nome'>

                        <p class='nomep'>$nome</p>

                    </div>
                
                </div>

            </div>

        </template>

        <template id="CardDourado">
            
            <div class='card card$i'>

                <div class='header'>

                    <div class='lado-esquerdo'>

                        <img src='../../public/assets/midias/imgs/c30b207a7f70aada6d8fcf576db95fa1.png'>

                    </div>

                    <div class='centro'>

                        <div class='nome'>$nome</div>

                        <div class='barras'>

                            <div class='barra'></div>

                            <div class='barra'></div>
                    
                            <div class='barra'></div>
                    
                            <div class='barra'></div>
                    
                            <div class='barra'></div>
                    
                            <div class='barra'></div>
                    
                            <div class='barra'></div>
                    
                            <div class='barra'></div> 
                            
                            <div class='barra'></div>
                    
                            <div class='barra'></div>
                    
                            <div class='barra'></div>
                    
                            <div class='barra'></div> 
                            
                            <div class='barra'></div>
                    
                            <div class='barra'></div>
                    
                            <div class='barra'></div>
                    
                            <div class='barra'></div> 

                            <div class='barra'></div>
                    
                            <div class='barra'></div>
            
                        </div>
                    
                    </div>

                </div>

                <div class="foto-personagem">

                    <img class="foto-p" src="">

                </div>

                <div class='desc'>

                    <div class='logo'>

                        <img src='../../public/assets/midias/imgs/Dragon_Ball_Super_Logo.webp'>

                    </div>

                    <div class='circulo circulo-verm'></div>

                    <div class='circulo circulo-azul'></div>

                    <div class='dragon atk-dragon'>

                        <img src='../../public/assets/midias/imgs/black-dragon-icon-6.png'>

                    </div>

                    <div class='atk'>

                        <h1>ATK</h1>

                        <h1 class='atkh'>$ataque</h1>

                    </div>

                    <div class='dragon def-dragon'>

                        <img src='../../public/assets/midias/imgs/black-dragon-icon-6.png'>

                    </div>

                    <div class='def'>

                        <h1>DEF</h1>

                        <h1 class='defh'>$vida</h1>

                    </div>

                </div>

            </div>

        </template>

        <template id="CardOriental">
                                    
            <div class='card card$i'>

                <div class='header'>

                    <img class='sheilong' src='../../public/assets/midias/imgs/transparent.png'>

                    <div class='triangulo'></div>

                    <div class='nome'>

                        <p class="apelidop"></p>

                    </div>

                </div>

                <div class='bordas borda-esq'>

                    <div class='quinas quina-cima-esq'>

                        <div class='cima'>

                            <div class='verde'></div>

                            <div class='quadrado'>

                                <img class='quad-verd' src='../../public/assets/midias/imgs/icons8-dharmachakra-48.png'>

                            </div>

                        </div>

                        <div class='meio'>

                            <div class='verde'></div>

                            <div class='quadrado quad-verm'></div>

                        </div>

                        <div class='baixo'>

                            <div class='quadrado'>

                                <img class='quad-verd' src='../../public/assets/midias/imgs/icons8-dharmachakra-48.png'>

                            </div>

                        </div>

                    </div>

                    <div class='laterais lateral-esq'>

                        <img src='../../public/assets/midias/imgs/icons8-adornment-64.png'>

                        <img src='../../public/assets/midias/imgs/icons8-adornment-64.png'>

                        <img src='../../public/assets/midias/imgs/icons8-adornment-64.png'>

                        <img src='../../public/assets/midias/imgs/icons8-adornment-64.png'>

                        <img src='../../public/assets/midias/imgs/icons8-adornment-64.png'>

                        <img src='../../public/assets/midias/imgs/icons8-adornment-64.png'>

                        <img src='../../public/assets/midias/imgs/icons8-adornment-64.png'>

                        <img src='../../public/assets/midias/imgs/icons8-adornment-64.png'>
                    
                        <img src='../../public/assets/midias/imgs/icons8-adornment-64.png'>

                        <img src='../../public/assets/midias/imgs/icons8-adornment-64.png'>

                    </div>
                    
                    <div class='quinas quina-baixo-esq'>

                        <div class='cima'>

                            <div class='verde'></div>

                            <div class='quadrado'>

                                <img class='quad-verd' src='../../public/assets/midias/imgs/icons8-dharmachakra-48.png'>

                            </div>

                        </div>

                        <div class='meio'>

                            <div class='verde'></div>

                            <div class='quadrado quad-verm'></div>

                        </div>

                        <div class='baixo'>

                            <div class='quadrado'>

                                <img class='quad-verd' src='../../public/assets/midias/imgs/icons8-dharmachakra-48.png'>

                            </div>

                        </div>

                    </div>

                </div>
                
                <div class='bordas borda-dir'>

                    <div class='quinas quina-cima-dir'>

                        <div class='cima'>

                            <div class='verde'></div>

                            <div class='quadrado'>

                                <img class='quad-verd' src='../../public/assets/midias/imgs/icons8-dharmachakra-48.png'>

                            </div>

                        </div>

                        <div class='meio'>

                            <div class='verde'></div>

                            <div class='quadrado quad-verm'></div>

                        </div>

                        <div class='baixo'>

                            <div class='quadrado'>

                                <img class='quad-verd' src='../../public/assets/midias/imgs/icons8-dharmachakra-48.png'>


                            </div>

                        </div>

                    </div>

                    <div class='laterais lateral-dir'>

                        <img src='../../public/assets/midias/imgs/icons8-adornment-64.png'>

                        <img src='../../public/assets/midias/imgs/icons8-adornment-64.png'>

                        <img src='../../public/assets/midias/imgs/icons8-adornment-64.png'>

                        <img src='../../public/assets/midias/imgs/icons8-adornment-64.png'>

                        <img src='../../public/assets/midias/imgs/icons8-adornment-64.png'>

                        <img src='../../public/assets/midias/imgs/icons8-adornment-64.png'>

                        <img src='../../public/assets/midias/imgs/icons8-adornment-64.png'>

                        <img src='../../public/assets/midias/imgs/icons8-adornment-64.png'>
                    
                        <img src='../../public/assets/midias/imgs/icons8-adornment-64.png'>

                        <img src='../../public/assets/midias/imgs/icons8-adornment-64.png'>

                    </div>
                    
                    <div class='quinas quina-baixo-dir'>

                        <div class='cima'>

                            <div class='verde'></div>

                            <div class='quadrado'>

                                <img class='quad-verd' src='../../public/assets/midias/imgs/icons8-dharmachakra-48.png'>

                            </div>

                        </div>

                        <div class='meio'>

                            <div class='verde'></div>

                            <div class='quadrado quad-verm'></div>

                        </div>

                        <div class='baixo'>

                            <div class='quadrado'>

                                <img class='quad-verd' src='../../public/assets/midias/itens/Nuvem do Goku.png'>

                            </div>

                        </div>

                    </div>

                </div>

                
                <div class="foto-personagem">

                    <img class="foto-p" src="">

                </div>
                
                <img class='sheilong desc-sheilong' src='../../public/assets/midias/imgs/transparent.png'>

                <div class='desc'>

                    <div class='triangulo'></div>

                    <div class='var'>

                        <div class='atk'>
                        
                            <p class="akp"></p>

                        </div>

                        <div class='def'>
                        
                            <p class="dep"></p>

                        </div>

                    </div>

                </div>

            </div>

        </template>

        <template id="CardNormal">

            <div class='card card$i' draggable='true'>
                        
                    <div class='header'>
                        
                        <div class='lado-esquerdo'>
                        
                            <img src='../../public/assets/midias/imgs/ico.jpg'>
                        
                        </div>
                        
                        <div class='laterais'></div>
                        
                        <div class='centro'>
                        
                            <div class='barra barra-lado-esq'></div>
                        
                            <div class='barra'></div>
                        
                            <div class='barra'></div>
                        
                            <div class='barra'></div>
                        
                            <div class='barra'></div>
                        
                            <div class='barra'></div>
                        
                            <div class='barra'></div>
                        
                            <div class='barra'></div>
                        
                            <div class='barra'></div>
                        
                            <div class='barra barra-lado-dir'></div>
                        
                        </div>
                        
                        <div class='lado-direito'>
                        
                            <img src='../../public/assets/midias/imgs/simbolo-go-goku-dragon-ball-pegatina-negativo.png'>
                        
                        </div>
                        
                    </div>

                    
                    <div class="foto-personagem">

                        <img class="foto-p" src="../../public//assets//midias//personagens//Androide 17.webp">

                    </div>
                    
                    
                    <div class='desc'>
                        
                    <div class='nome'>
                        <p id='nome'>$nome</p>
                    </div>
                        
                    <div class='var-per'>
                        
                        <img src='../../public/assets/midias/icons/icons8-filled-heart-48 (1).png'>
                        
                        <p>$vida</p>
                        
                        <img src='../../public/assets/midias/icons/icons8-espada-48.png'>
                        
                        <p>$ataque</p>
                        
                    </div>
                        
                </div>
                        
            </div>
                        

        </template>

        <?php

        $card = isset($card) ? $card : "CardNormal";

        echo "<input type='hidden' id='tipoCard' value='$card'>";

        ?>

        <div class="item item1">

            <img id="item1" class="img" src="../../public/assets/midias/itens/Curry Picante.png">

        </div>

        <div class="item item2">

            <img id="item2" class="img" src="../../public/assets/midias/itens/Arroz Cozido.png">

        </div>

        <div class="itemEfect">

            <div class="i">
                <img src="../../public/assets/midias/itens/Esfera do Dragão.png">
            </div>

        </div>

        <div class="crosshair">
            <img src="../../public/assets/midias/icons/icons8-definir-localização-90.png">
        </div>


        <div class="teste"></div>

    </div>

</body>
</html>
