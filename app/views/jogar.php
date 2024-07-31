<?php 

session_start();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DragonPet - Preparar time</title>
    <link rel="shortcut icon" href="../../public/assets/midias/ico/icon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../../public/assets/css/preparar-time-style.css">
    <link rel="stylesheet" href="../../public/assets/css/animacao-load.css">
    <link rel="stylesheet" href="../../public/assets/css/itens.css">
    <script src="../../public/assets/js/prepararTime/jogar.js"></script>
    <script src="../../public/assets/js/prepararTime/formAtualizar.js"></script>
    <script src="../../public/assets/js/prepararTime/salvarEstado.js"></script>
    <script src="../../public/assets/js/prepararTime/buscarEstado.js"></script>
    <script src="../../public/assets/js/prepararTime/itens.js"></script>
    <script src="../../public/assets/js/prepararTime/variaveis.js"></script>
    <script src="../../public/assets/js/prepararTime/animacaoLoad.js"></script>
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

            <div class="variavel nome-time"></div>

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

            <button id="congelar"><img src="../../public/assets/midias/icons/icons8-snowflake-50.png">Congelar</button>

            <button id="vender"><img src="../../public/assets/midias/icons/icons8-bilhete-50.png">Vender</button>

            <button id="descongelar"><img src="../../public/assets/midias/icons/gotas-de-agua.png">Descongelar</button>

            <form>

                <input type="hidden" name="finalizarTurno">

                <button id="finalizar">Finalizar turno<img src="../../public/assets/midias/icons/espadas.png"></button>

            </form>

        </div>

        <div class="buttons-cima">

            <button><img src="../../public/assets/midias/icons/icons8-estrela-48.png"></button>

            <button id="config"><img src="../../public/assets/midias/icons/icons8-linhas-50.png"></button>

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

        <?php


        for($i=1;$i<=5;$i++){

            if(isset($_SESSION["nome$i"])){
    
                $mensagem = $_SESSION["nome$i"];
        
                echo "<script type='text/javascript'>console.log('$mensagem');</script>";
        
            }
    
        }

        ?>

        <div class="item item1">

            <img class="img" src="../../public/assets/midias/itens/Brave Sword.png">

        </div>

        <div class="item item2">

            <img class="img" src="../../public/assets/midias/itens/Cápsula do Tempo.png">

        </div>

        <div class="itemEfect">

            <div class="i i1">
                <img src="../../public/assets/midias/itens/Esfera do Dragão.png">
            </div>

            <div class="i i2">
                <img src="../../public/assets/midias/itens/Esfera do Dragão.png">
            </div>

            <div class="i i3">
                <img src="../../public/assets/midias/itens/Esfera do Dragão.png">
            </div>

            <div class="i i4">
                <img src="../../public/assets/midias/itens/Esfera do Dragão.png">
            </div>

            <div class="i i5">
                <img src="../../public/assets/midias/itens/Esfera do Dragão.png">
            </div>

        </div>

        <div class="crosshair">
            <img src="../../public/assets/midias/icons/icons8-definir-localização-90.png">
        </div>

    </div>

</body>
</html>