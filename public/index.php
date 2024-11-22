<?php

session_start();

$id = $_SESSION["id"];

require_once "../app/conf/Conexao.php";

// Selecionar os itens que já possuem para mudar o botão de comprar para equipar
$mysql = "SELECT * FROM inventario WHERE id_jogador = :id";

$pdo = Conexao::conectar('../app/conf/conf.ini');

$stmt = $pdo->prepare($mysql);

$stmt->execute([":id" => $id]);

$itens = $stmt->fetchAll(PDO::FETCH_ASSOC);

unset($_SESSION["gif"]);

unset($_SESSION["titulo"]);

if (!empty($itens)) {

    $data = [];

    for($i = 0; $i < count($itens); $i++){

        if($itens[$i]["categoria"] == "titulo" && $itens[$i]["equipado"] == "equipado"){
                
            $_SESSION["titulo"] = $itens[$i]["nome_item"];

        }

        if($itens[$i]["categoria"] == "gif" && $itens[$i]["equipado"] == "equipado"){

            switch($itens[$i]["nome_item"]){
                case " Goku e kuririn":
                    $_SESSION["gif"] = "assets/midias/backgroundPerfil/goku-&-kuririn.gif";
                    break;
                case " Goku na nuvem":
                    $_SESSION["gif"] = "assets/midias/backgroundPerfil/goku-nuvem-voadora.webp";
                    break;
                case " Goku vs vegeta":
                    $_SESSION["gif"] = "assets/midias/backgroundPerfil/goku-vs-vegeta.gif";
                    break;
                case " +8000":
                    $_SESSION["gif"] = "assets/midias/backgroundPerfil/mais-de-8000.gif";
                    break;
                case " Casa do mestre":
                    $_SESSION["gif"] = "assets/midias/backgroundPerfil/mestre-kame-house.gif";
                    break;
                case " Visões do mestre":
                    $_SESSION["gif"] = "assets/midias/backgroundPerfil/mestre-kame-oculos.gif";
                    break;
                case " Surpresa do mestre":
                    $_SESSION["gif"] = "assets/midias/backgroundPerfil/mestre-kame-surpreso.gif";
                    break;
                case " Sheilong":
                    $_SESSION["gif"] = "assets/midias/backgroundPerfil/sheilong.gif";
                    break;

            }

        }
        
        $item = $itens[$i]["categoria"] . "=>" . $itens[$i]["nome_item"] . "=>" . $itens[$i]["equipado"];

        array_push($data, $item);

    }

    echo "<script>
        const itens = ".json_encode($data)."; 

        localStorage.setItem('itens', JSON.stringify(itens));
    </script>";

}


$mysql = "SELECT saldo FROM jogadores WHERE id = :id";

$pdo = Conexao::conectar('../app/conf/conf.ini');

$stmt = $pdo->prepare($mysql);

$stmt->execute([":id" => $id]);

$saldoArray = $stmt->fetchAll(PDO::FETCH_ASSOC);

$saldo = $saldoArray[0]["saldo"];


if(isset($_SESSION["errorLoja"])){

    $error = $_SESSION["errorLoja"];

    unset($_SESSION["errorLoja"]);
    
    echo "<div class='error'>
            <div class='aviso'>!</div>
            $error
        </div>";

}

if(isset($_SESSION["sucessoLoja"])){

    $sucesso = $_SESSION["sucessoLoja"];
    
    unset($_SESSION["sucessoLoja"]);

    echo "<div class='certo'>
            <div class='bom'>✔</div>
                $sucesso
        </div>";

}


$displayStyle = isset($_SESSION["gif"]) ? "block" : "none";

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DragonPet</title>
    <link rel="shortcut icon" href="assets/midias/ico/dg.ico" type="image/x-icon">
    <link rel="stylesheet" href="assets/css/index-style.css">
    <link rel="stylesheet" href="assets/css/animacao-intro.css">
    <link rel="stylesheet" href="assets/css/creditos.css">
    <link rel="stylesheet" href="assets/css/cutscene.css">
    <link rel="stylesheet" href="assets/css/menu.css">
    <link rel="stylesheet" href="assets/css/tutorial.css">
    <link rel="stylesheet" href="assets/css/usuario.css">
    <script src="assets/js/forms/error.js"></script>
    <script src="assets/js/musicas.js"></script>
    <script src="assets/js/index/index.js"></script>
    <script src="assets/js/index/cutscene.js"></script>
    <script src="assets/js/menu.js"></script>
    <script src="assets/js/click.js"></script>
    <script src="assets/js/index/tutorial.js"></script>
    <script src="../public/assets/js/index/loja.js"></script>
    <script src="../public/assets/js/index/equipar.js"></script>
</head>
<body>

    <div class="overlay"></div>

    <div class="container">

        <div class="versao">

            <h1>1.00.00 ALPHA</h1>

        </div>

        <div class="config">

            <button id="menu"><img src="assets/midias/icons/icons8-linhas-50.png"></button>

        </div>

        <div class="logo">

            <h1 class="db">DragonBall</h1>

            <h1 class="ap">Auto Pets</h1>

            <img src="assets/midias/imgs/z.png">

        </div>

        <div class="bola">

            <img src="assets/midias/icons/Musett-Dragon-Ballz-Dragon-Ball.256.png">

        </div>

        <div class="buttons">

        <a href="../app/views/jogar.php"><button>Jogar</button></a>

            <button id="tutorial">Instruções</button>

            <button id="shop">Shop</button>

            <button id="ranking">Ranking</button>

        </div>

        <div class="pop-ups">

            <div class="pop-up shop-up">
                
                <img id="imgShop" src="">

                <p>nova customização disponível</p>

            </div>

            <div class="pop-up intrucoes-up">

                <img src="assets/midias/icons/icons8-pergunta-48.png">

                <p>aprenda como jogar</p>

            </div>

            <div class="pop-up ranking-up">

                <img src="assets/midias/icons/icons8-medalha-48.png">

                <p>confira sua classificação</p>

            </div>

        </div>

        <div class="logout">

            <button><img src="assets/midias/icons/icons8-sair-50.png"></button>

            <p id="nick"><?php echo $_SESSION["nome"]?></p>

        </div>
        
        <div class="direitos">

            <a target="_blank" href="https://www.bandai.com/"> <button><img src="assets/midias/icons/icons8-internet-60.png"></button></a>
           
            <a target="_blank" href="https://discord.com/invite/c2VcptyDYZ"><button><img src="assets/midias/icons/icons8-logo-discord-50.png"></button></a>

            <a target="_blank" href="https://github.com/JAOALUCAS/DragonPet"> <button><img src="assets/midias/icons/icons8-github-50.png"></button></a>

            <button id="creditos"><img src="assets/midias/icons/icons8-direitos-autorais-60.png"></button>

        </div>

        <div class="creditos">

            <div class="voltar">

                <button id="voltarCreditos"><img src="assets/midias/icons/icons8-voltar-64.png">Voltar</button>

            </div>

            <div class="creditos-texto"> 

                <h1>Créditos</h1>

                <div class="credits-section">

                    <h2>Programação</h2>

                    <p>Desenvolvido inteiramente por: <strong>João Lucas</strong></p>

                </div>
            
                <div class="credits-section">

                    <h2>Inspiração</h2>

                    <p>Design: <strong>Super Auto Pets, Bloons TD6</strong></p>

                    <p>Personagens: <strong>Dragon Ball Z</strong></p>

                    <p>Temática: <strong>Super Auto Pets</strong></p>

                </div>
            
                <div class="credits-section">

                    <h2>Origem da Ideia</h2>

                    <p>Concebida durante uma aula inspiradora do professor <strong>Rafael</strong>.</p>

                </div>
            
                <div class="credits-section">

                    <h2>Agradecimentos Especiais</h2>

                    <p>Dicas de Design: <strong>Kevin, P. Vinicius, Ítalo</strong></p>

                </div>
            
                <div class="credits-section">

                    <h2>Conteúdo Utilizado</h2>

                    <p>Franquia Dragon Ball Z: <strong>Personagens e elementos do universo DBZ</strong></p>

                    <p>Ícones: <strong>Icons8, Flaticon</strong></p>

                    <p>Paleta de Cores: <strong>FlatUI</strong></p>

                    <p>Fontes: <strong>daFontes</strong></p>

                    <p>Ilustrações de Personagens: <strong>Yoolk</strong></p>

                    <p>Músicas: <strong>All Star Tower Defense</strong></p>

                    <p>Efeitos Sonoros: <strong>Pixabay, Super Auto Pets</strong></p>

                </div>
            
                <div class="credits-section">

                    <h2>Agradecimentos Finais</h2>

                    <p>Se esqueci de dar crédito a alguém, peço desculpas. Seu apoio foi fundamental.</p>

                    <p>Um agradecimento especial ao mestre <strong>Akira Toriyama</strong>, cuja criação deu vida a este projeto.</p>
                    
                    <h1>Muito Obrigado a Todos!</h1>

                </div>

            </div>    

        </div>

        <div class="cutscene">

            <div class="close-button close-cutscene">

                <img src="assets/midias/icons/icons8-excluir-50.png">

            </div>

            <div class="inicio">

                <img src="assets/midias/cutscene/ligandoTv.gif">

            </div>

            <div class="background">

                <img src="assets/midias/cutscene/background.jpg">

            </div>

            <div class="apresentador">

                <img src="assets/midias/popUps/world-tournament-announcer.png">

            </div>

            <div class="falas"></div>

            <div class="emissora">

                <img src="assets/midias/cutscene/capsule-corp-pack-logo-028E729E8F-seeklogo.com.png">

            </div>

            <div class="manchete">

                <div class="ao-vivo">• ao vivo</div>

                <div class="simbolo">

                    <img src="assets/midias/cutscene/capsule-corp-pack-logo-028E729E8F-seeklogo.com.png">

                </div>

                <div class="manchete-tx">TORNEIO EM DBZ: 24° EDIÇÃO DO TORNEIO</div>

            </div>

            <div class="divisoria">
                
                <img src="assets/midias/cutscene/a-3-way-split-of-ultra-ego-vegeta-and-super-saiyan-goku-screaming-at-gohan-and-piccolo-from-dragon-ball-super-super-hero.avif">

            </div>

            <div class="goku">

                <img src="assets/midias/cutscene/kid-goku.gif">

            </div>

            <div class="tv-buttons">

                <div class="button button-ligar"></div>

                <div class="button"></div>

                <div class="button"></div>

                <div class="button"></div>

            </div>

            <div class="marca marca1">1.00.00 ALPHA</div>

            <div class="marca marca2">

                <img src="assets/midias/imgs/z.png">

            </div>

            <div class="final">

                <img src="assets/midias/cutscene/desligandoTv.gif">

            </div>

            <div class="comercial">

                <img id="img" src="">

            </div>

        </div>

        <div class="tutorial">      
            
            <div class="emoji">

                <img src="assets/midias/gifs/72gi.gif">

            </div>

            <div class="logo logo-tutorial">

                <h1 class="db">DragonBall</h1>
    
                <h1 class="ap">Auto Pets</h1>
    
                <img src="assets/midias/imgs/z.png">
    
            </div>

            <div class="bola bola-tutorial">

                <img src="assets/midias/icons/Musett-Dragon-Ballz-Dragon-Ball.256.png">
    
            </div>
    
            
            <div class="projetor">

                <img class="imagem-projetor" src="assets/midias/imgs/imagem-projetor1.png">

            </div>

            <div class="personagem-tutorial">

                <img src="assets/midias/popUps/kaiyo.png">

            </div>

            <div class="falas-tutorial"></div>

            <div class="voltar">

                <button id="voltarTutorial"><img src="assets/midias/icons/icons8-voltar-64.png">Voltar</button>

            </div>

        </div>

        <div class="menu">

            <ul>

                <li id="close-menu">
                    
                    <img src="assets/midias/icons/icons8-x2-48.png">

                    <p>Fechar</p>

                </li>

                <li class="rederecionar" id="rederecionar-config">

                    <img src="assets/midias/icons/icons8-engrenagem-50.png">

                    <p>Configurações</p>

                </li>

                <li class="rederecionar" id="rederecionar-historico">

                    <img src="assets/midias/icons/icons8-relógio-30.png">

                    <p>Histórico</p>

                </li>

                <li class="rederecionar" id="rederecionar-conta">
                    
                    <img src="assets/midias/icons/icons8-pessoa-48.png">

                    <p>Perfil</p>

                </li>

                <li>

                    <img src="assets/midias/icons/icons8-casa-50.png">

                    <p><a href="index.html"></a>Home</p>

                </li>

            </ul>

        </div>

        <div class="config-menu">

            <div class="opcoes">

                <ul>

                    <li id="checkConfig">

                        <img src="assets/midias/icons/icons8-engrenagem2-50.png"> 
                        
                        <p>Configurações</p>

                    </li>

                    <li id="checkHistori">

                        <img src="assets/midias/icons/icons8-relógio2-60.png"> 

                        <p>Histórico</p>

                    </li>

                    <li id="checkPerfil">

                        <img src="assets/midias/icons/icons8-pessoa2-48.png"> 

                        <p>Perfil</p>

                    </li>

                    <li id="fechar-menu">

                        <img src="assets/midias/icons/icons8-x-48.png"> 

                        <p>Fechar</p>

                    </li>

                </ul>

            </div>

            <div class="config-opcoes">

                <div class="game-opcoes">

                    <h1>Configurações do jogo</h1>

                    <div class="tela-cheia">
                        
                        <div class="opcoes-cima">

                            <img src="assets/midias/icons/icons8-tela-cheia-64.png">

                            <div class="texto">
                                
                                <h2>Tela cheia</h2>
    
                                <p>Deixe a tela cheia para uma experiência mais imersiva</p>
    
                            </div>

                        </div>

                        <div class="toggle-container toggle-tela">

                            <input type="checkbox" id="checkTela">

                            <label for="checkTela" class="toggle"></label>

                        </div>

                    </div>

                    <div class="audio">
                        
                        <div class="opcoes-cima">
                                
                            <img src="assets/midias/icons/icons8-volume-alto-50.png">

                            <div class="texto">

                                <h2>Desativar Audio</h2>

                                <p>Você pode mutar o som do jogo se te incomodar</p>

                            </div>

                        </div>

                        <div class="toggle-container toggle-audio">

                            <input type="checkbox" id="checkAudio">

                            <label for="checkAudio" class="toggle"></label>
                            
                        </div>

                    </div>

                    <div class="musica">

                        <div class="opcoes-cima">

                            <img src="assets/midias/icons/icons8-música-48.png">

                            <div class="texto">
                                    
                                <h2>Ativar Musica</h2>

                                <p>Você pode aproveitar a trilha sonora enquanto joga</p>

                            </div>

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
                    
                                <div class="usuario">
                    
                                    <div class="foto-perfil"></div>
                                    
                                    <div class="bkg-perfil"></div>
                
                                </div>

                                <img src="assets/midias/icons/icons8-batalha-64.png">
                                
                                <div class="usuario adversario">
                    
                                    <div class="foto-perfil"></div>
                                    
                                    <div class="bkg-perfil"></div>
                
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div class="perfil-opcoes">

                    <h1>Configurações da conta</h1>

                    <div class="excluir-conta">

                        <img src="assets/midias/icons/icons8-lixeira-48.png">

                        <div class="texto">
                                
                            <h2>Excluir conta</h2>

                            <p>Se deseja excluir sua conta <a href="">clique aqui</a></p>
                        
                        </div>

                    </div>
                    
                    <div class="mudar-senha">

                        <img src="assets/midias/icons/icons8-cadeado-aberto-48.png">

                        <div class="texto">
                                
                            <h2>Mudar senha</h2>

                            <p>Se deseja alterar a senha da sua conta <a href="">clique aqui</a></p>
                        
                        </div>


                    </div>

                </div>

            </div>

        </div>

        <div class="shop">

            <div class="shop-cima">
                    
                <div class="slider-container">

                    <div id="slider" class="slider">

                        <img id="sl" src="assets/midias/silder/1.png">

                    </div>

                </div>
                
                <div class="categorias">

                    <button class="shop-categoria" id="card">Cards</button>

                    <button class="shop-categoria" id="background">Backgrounds</button>

                    <button class="shop-categoria" id="titulo">Titulos</button>

                    <button class="shop-categoria" id="perfil">Perfis</button>

                </div>

            </div>

            <div class="shop-baixo">
                    
                <div class="informacoes">

                    <div class="perfil">

                        <div class="foto-perfil"><img src="<?php echo $_SESSION["path"]; ?>" /></div>

                        <div class="bkg-perfil">
                            
                            <p class="nick" ><?php echo $_SESSION["nome"]?></p>

                            <img style="display: <?php echo $displayStyle; ?>;" src="<?php echo isset($_SESSION["gif"]) ? $_SESSION["gif"] : '' ?>">

                            <p class="tc" style="margin-top: <?php echo isset($_SESSION["gif"]) ? "-40px" :  "20px" ?>;"><?php echo isset($_SESSION["titulo"]) ? $_SESSION["titulo"] : ''; ?></p>
                            
                        </div>

                    </div>

                    <div class="dinheiro">

                        <img src="assets/midias/icons/dinheiro.png">

                        <p><?php echo $saldo?></p>

                    </div>

                    <div class="voltar">

                        <button id="voltarShop"><img src="assets/midias/icons/icons8-voltar-64.png">Voltar</button>

                    </div>

                </div>

            </div>

            <div class="shop-card categoria-container">
             
                <div class="produtos">

                    <div class="card">

                        <div class="titulo-card">                            

                            <p class="n">#1</p>

                            <h2>Card futurista</h2>

                        </div>

                        <img class="img-card" src="assets/midias/imgs/card1.png">

                        <div class="custo">

                            <img src="assets/midias/icons/dinheiro.png">
    
                            <p>$1000</p>
    
                        </div>

                        <div class="comprar">

                            <form method="post" action="../app/models/inserirInventario.php">

                                <button type="submit">Comprar</button>

                            </form>

                        </div>

                    </div>

                    <div class="card">

                        <div class="titulo-card">                            

                            <p class="n">#2</p>

                            <h2>Card Dourado</h2>

                        </div>

                        <img class="img-card" src="assets/midias/imgs/card2.jpeg">

                        <div class="custo">

                            <img src="assets/midias/icons/dinheiro.png">
    
                            <p>$5000</p>
    
                        </div>
                        
                        <div class="comprar">

                            <form method="post" action="../app/models/inserirInventario.php">

                                <button type="submit">Comprar</button>

                            </form>

                        </div>

                    </div>

                    <div class="card">

                        <div class="titulo-card">                            

                            <p class="n">#3</p>

                            <h2>Card Oriental</h2>

                        </div>

                        <img class="img-card" src="assets/midias/imgs/card3.jpeg">

                        <div class="custo">

                            <img src="assets/midias/icons/dinheiro.png">
    
                            <p>$2750</p>
    
                        </div>
                        
                        <div class="comprar">

                            <form method="post" action="../app/models/inserirInventario.php">

                                <button type="submit">Comprar</button>

                            </form>

                        </div>

                    </div>

                </div>

                <div class="informacoes-card">
                   
                    <div class="perfil">

                        <div class="foto-perfil"><img src="<?php echo $_SESSION["path"]; ?>" /></div>

                        <div class="bkg-perfil">
                            
                            <p class="nick" ><?php echo $_SESSION["nome"]?></p>

                            <img style="display: <?php echo $displayStyle; ?>;" src="<?php echo isset($_SESSION["gif"]) ? $_SESSION["gif"] : '' ?>">

                            <p class="tc" style="margin-top: <?php echo isset($_SESSION["gif"]) ? "-40px" :  "20px" ?>;"><?php echo isset($_SESSION["titulo"]) ? $_SESSION["titulo"] : ''; ?></p>
                            
                        </div>

                    </div>

                    <div class="dinheiro">

                        <img src="assets/midias/icons/dinheiro.png">
                        
                        <p><?php echo $saldo?></p>

                    </div>

                    <div class="voltar">

                        <button class="voltar-categorias"><img src="assets/midias/icons/icons8-voltar-64.png">Voltar</button>

                    </div>

                </div>

            </div>
            
            <div class="shop-backgrounds categoria-container">

                <div class="produtos produtos-bk">

                    <div class="coluna1">
                            
                        <div class="backgrounds-prods">

                            <div class="background-prod-container">

                                <img src="assets/midias/backgroundTela/Planeta dos Kaioshins.png">

                            </div>

                            <div class="background-aside">

                                <div class="titulo-card">                            

                                    <p class="n">#1</p>
        
                                    <h2>Terra dos Kaio</h2>
        
                                </div>
                                    
                                <div class="custo">

                                    <img src="assets/midias/icons/dinheiro.png">
            
                                    <p>$2750</p>
            
                                </div>
                                
                                <div class="comprar">

                                    <form method="post" action="../app/models/inserirInventario.php">

                                        <button type="submit">Comprar</button>

                                    </form>

                                </div>

                            </div>

                        </div>
                        
                        <div class="backgrounds-prods">

                            <div class="background-prod-container">

                                <img src="assets/midias/backgroundTela/background.png">

                            </div>

                            <div class="background-aside">

                                <div class="titulo-card">                            

                                    <p class="n">#2</p>

                                    <h2>Planeta terra</h2>

                                </div>
                                    
                                <div class="custo">

                                    <img src="assets/midias/icons/dinheiro.png">
            
                                    <p>$1000</p>
            
                                </div>
                                
                                <div class="comprar">

                                    <form method="post" action="../app/models/inserirInventario.php">

                                        <button type="submit">Comprar</button>

                                    </form>

                                </div>

                            </div>

                        </div>

                        
                        <div class="backgrounds-prods">

                            <div class="background-prod-container">

                                <img src="assets/midias/backgroundTela/Deserto Rochoso.png">

                            </div>

                            <div class="background-aside">

                                <div class="titulo-card">                            

                                    <p class="n">#3</p>

                                    <h2>Campo Rochoso</h2>

                                </div>
                                    
                                <div class="custo">

                                    <img src="assets/midias/icons/dinheiro.png">
            
                                    <p>$2750</p>
            
                                </div>
                                
                                <div class="comprar">

                                    <form method="post" action="../app/models/inserirInventario.php">

                                        <button type="submit">Comprar</button>

                                    </form>

                                </div>

                            </div>

                        </div>
                        
                        <div class="backgrounds-prods">

                            <div class="background-prod-container">

                                <img src="assets/midias/backgroundTela/Campos de Namekusei.jpg">

                            </div>

                            <div class="background-aside">

                                <div class="titulo-card">                            

                                    <p class="n">#4</p>

                                    <h2>Planeta namek</h2>

                                </div>
                                    
                                <div class="custo">

                                    <img src="assets/midias/icons/dinheiro.png">
            
                                    <p>$3000</p>
            
                                </div>
                                
                                <div class="comprar">

                                    <form method="post" action="../app/models/inserirInventario.php">

                                        <button type="submit">Comprar</button>

                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="coluna2">
                        
                        <div class="backgrounds-prods">

                            <div class="background-prod-container">

                                <img src="assets/midias/backgroundTela/Torneio pixel.jpg">

                            </div>

                            <div class="background-aside">

                                <div class="titulo-card">                            

                                    <p class="n">#5</p>

                                    <h2>Torneio Pixel</h2>

                                </div>
                                    
                                <div class="custo">

                                    <img src="assets/midias/icons/dinheiro.png">
            
                                    <p>$2000</p>
            
                                </div>
                                
                                <div class="comprar">

                                    <form method="post" action="../app/models/inserirInventario.php">

                                        <button type="submit">Comprar</button>

                                    </form>

                                </div>

                            </div>

                        </div>
                        
                        <div class="backgrounds-prods">

                            <div class="background-prod-container">

                                <img src="assets/midias/backgroundTela/Planete kaio.png">

                            </div>

                            <div class="background-aside">

                                <div class="titulo-card">                            

                                    <p class="n">#6</p>

                                    <h2>Planeta kaio</h2>

                                </div>
                                    
                                <div class="custo">

                                    <img src="assets/midias/icons/dinheiro.png">
            
                                    <p>$3000</p>
            
                                </div>
                                
                                <div class="comprar">

                                    <form method="post" action="../app/models/inserirInventario.php">

                                        <button type="submit">Comprar</button>

                                    </form>

                                </div>

                            </div>

                        </div>

                        
                        <div class="backgrounds-prods">

                            <div class="background-prod-container">

                                <img src="assets/midias/backgroundTela/Campo de Treinamento.webp">

                            </div>

                            <div class="background-aside">

                                <div class="titulo-card">                            

                                    <p class="n">#7</p>

                                    <h2>Sala do tempo</h2>

                                </div>
                                    
                                <div class="custo">

                                    <img src="assets/midias/icons/dinheiro.png">
            
                                    <p>$1500</p>
            
                                </div>
                                
                                <div class="comprar">

                                    <form method="post" action="../app/models/inserirInventario.php">

                                        <button type="submit">Comprar</button>

                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                
                <div class="informacoes-background">
                    
                    <div class="perfil">

                        <div class="foto-perfil"><img src="<?php echo $_SESSION["path"]; ?>" /></div>

                        <div class="bkg-perfil">
                            
                            <p class="nick" ><?php echo $_SESSION["nome"]?></p>

                            <img style="display: <?php echo $displayStyle; ?>;" src="<?php echo isset($_SESSION["gif"]) ? $_SESSION["gif"] : '' ?>">

                            <p class="tc" style="margin-top: <?php echo isset($_SESSION["gif"]) ? "-40px" :  "20px" ?>;"><?php echo isset($_SESSION["titulo"]) ? $_SESSION["titulo"] : ''; ?></p>
                            
                        </div>

                    </div>

                    <div class="dinheiro">

                        <img src="assets/midias/icons/dinheiro.png">

                        <p><?php echo $saldo?></p>

                    </div>

                    <div class="voltar">

                        <button class="voltar-categorias"><img src="assets/midias/icons/icons8-voltar-64.png">Voltar</button>

                    </div>

                </div>

            </div>

            <div class="shop-titulos categoria-container">

                <div class="produtos">

                    <div class="coluna1">

                        <div class="titulo-container">

                            <div class="titulo-card">                            

                                <p class="n">#1</p>

                            </div>
                            
                            <p class="tc">Guerreiro Z</p>

                            <div class="custo">

                                <img src="assets/midias/icons/dinheiro.png">
        
                                <p>$100</p>
        
                            </div>
                            
                            <div class="comprar">

                                <form method="post" action="../app/models/inserirInventario.php">

                                    <button type="submit">Comprar</button>

                                </form>

                            </div>

                        </div>

                        <div class="titulo-container">

                            <div class="titulo-card">                            

                                <p class="n">#2</p>

                            </div>

                            <p class="tc">Super Saiyajin</p>

                            <div class="custo">

                                <img src="assets/midias/icons/dinheiro.png">
        
                                <p>$100</p>
        
                            </div>
                            
                            <div class="comprar">

                                <form method="post" action="../app/models/inserirInventario.php">

                                    <button type="submit">Comprar</button>

                                </form>

                            </div>

                        </div>

                        <div class="titulo-container">

                            <div class="titulo-card">                            

                                <p class="n">#3</p>

                            </div>

                            <p class="tc">Príncipe dos Saiyajins</p>

                            <div class="custo">

                                <img src="assets/midias/icons/dinheiro.png">
        
                                <p>$100</p>
        
                            </div>
                            
                            <div class="comprar">

                                <form method="post" action="../app/models/inserirInventario.php">

                                    <button type="submit">Comprar</button>

                                </form>

                            </div>

                        </div>

                        <div class="titulo-container">

                            <div class="titulo-card">                            

                                <p class="n">#4</p>

                            </div>

                            <p class="tc">Lendário Super Saiyajin</p>

                            <div class="custo">

                                <img src="assets/midias/icons/dinheiro.png">
        
                                <p>$100</p>
        
                            </div>
                            
                            <div class="comprar">

                                <form method="post" action="../app/models/inserirInventario.php">

                                    <button type="submit">Comprar</button>

                                </form>

                            </div>

                        </div>

                        <div class="titulo-container">

                            <div class="titulo-card">                            

                                <p class="n">#5</p>

                            </div>

                            <p class="tc">Prodígio Namekuseijin</p>

                            <div class="custo">

                                <img src="assets/midias/icons/dinheiro.png">
        
                                <p>$100</p>
        
                            </div>
                            
                            <div class="comprar">

                                <form method="post" action="../app/models/inserirInventario.php">

                                    <button type="submit">Comprar</button>

                                </form>

                            </div>

                        </div>

                        <div class="titulo-container">

                            <div class="titulo-card">                            

                                <p class="n">#6</p>

                            </div>

                            <p class="tc">Explorador do Universo</p>

                            <div class="custo">

                                <img src="assets/midias/icons/dinheiro.png">
        
                                <p>$100</p>
        
                            </div>
                            
                            <div class="comprar">

                                <form method="post" action="../app/models/inserirInventario.php">

                                    <button type="submit">Comprar</button>

                                </form>

                            </div>

                        </div>

                        <div class="titulo-container">

                            <div class="titulo-card">                            

                                <p class="n">#7</p>

                            </div>

                            <p class="tc">Mestre das Artes Marciais</p>

                            <div class="custo">

                                <img src="assets/midias/icons/dinheiro.png">
        
                                <p>$100</p>
        
                            </div>
                            
                            <div class="comprar">

                                <form method="post" action="../app/models/inserirInventario.php">

                                    <button type="submit">Comprar</button>

                                </form>

                            </div>

                        </div>

                    </div>

                    <div class="coluna2">

                        <div class="titulo-container">

                            <div class="titulo-card">                            

                                <p class="n">#8</p>

                            </div>

                            <p  class="tc">Deus da Destruição</p>

                            <div class="custo">

                                <img src="assets/midias/icons/dinheiro.png">
        
                                <p>$100</p>
        
                            </div>
                            
                            <div class="comprar">

                                <form method="post" action="../app/models/inserirInventario.php">

                                    <button type="submit">Comprar</button>

                                </form>

                            </div>

                        </div>

                        <div class="titulo-container">

                            <div class="titulo-card">                            

                                <p class="n">#9</p>

                            </div>

                            <p class="tc">Guardião do Ki</p>

                            <div class="custo">

                                <img src="assets/midias/icons/dinheiro.png">
        
                                <p>$100</p>
        
                            </div>
                            
                            <div class="comprar">

                                <form method="post" action="../app/models/inserirInventario.php">

                                    <button type="submit">Comprar</button>

                                </form>

                            </div>

                        </div>

                        <div class="titulo-container">

                            <div class="titulo-card">                            

                                <p class="n">#10</p>

                            </div>

                            <p class="tc">Caçador de Dragões</p>

                            <div class="custo">

                                <img src="assets/midias/icons/dinheiro.png">
        
                                <p>$100</p>
        
                            </div>
                            
                            <div class="comprar">

                                <form method="post" action="../app/models/inserirInventario.php">

                                    <button type="submit">Comprar</button>

                                </form>

                            </div>

                        </div>

                        <div class="titulo-container">

                            <div class="titulo-card">                            

                                <p class="n">#11</p>

                            </div>

                            <p class="tc">Anjo Protetor</p>

                            <div class="custo">

                                <img src="assets/midias/icons/dinheiro.png">
        
                                <p>$100</p>
        
                            </div>
                            
                            <div class="comprar">

                                <form method="post" action="../app/models/inserirInventario.php">

                                    <button type="submit">Comprar</button>

                                </form>

                            </div>

                        </div>

                        <div class="titulo-container">

                            <div class="titulo-card">                            

                                <p class="n">#12</p>

                            </div>

                            <p class="tc">Conquistador do Torneio</p>

                            <div class="custo">

                                <img src="assets/midias/icons/dinheiro.png">
        
                                <p>$100</p>
        
                            </div>
                            
                            <div class="comprar">

                                <form method="post" action="../app/models/inserirInventario.php">

                                    <button type="submit">Comprar</button>

                                </form>

                            </div>

                        </div>

                        <div class="titulo-container">

                            <div class="titulo-card">                            

                                <p class="n">#13</p>

                            </div>

                            <p class="tc">Herói da Terra</p>

                            <div class="custo">

                                <img src="assets/midias/icons/dinheiro.png">
        
                                <p>$100</p>
        
                            </div>
                            
                            <div class="comprar">

                                <form method="post" action="../app/models/inserirInventario.php">

                                    <button type="submit">Comprar</button>

                                </form>

                            </div>

                        </div>

                        <div class="titulo-container">

                            <div class="titulo-card">                            

                                <p class="n">#14</p>

                            </div>

                            <p class="tc">Invencível Super Guerreiro</p>

                            <div class="custo">

                                <img src="assets/midias/icons/dinheiro.png">
        
                                <p>$100</p>
        
                            </div>
                            
                            <div class="comprar">

                                <form method="post" action="../app/models/inserirInventario.php">

                                    <button type="submit">Comprar</button>

                                </form>

                            </div>

                        </div>

                    </div>

                    <div class="coluna3">

                        <div class="titulo-container">

                            <div class="titulo-card">                            

                                <p class="n">#15</p>

                            </div>

                            <p class="tc">Líder dos Guerreiros Z</p>

                            <div class="custo">

                                <img src="assets/midias/icons/dinheiro.png">
        
                                <p>$100</p>
        
                            </div>
                            
                            <div class="comprar">

                                <form method="post" action="../app/models/inserirInventario.php">

                                    <button type="submit">Comprar</button>

                                </form>

                            </div>

                        </div>

                        <div class="titulo-container">

                            <div class="titulo-card">                            

                                <p class="n">#16</p>

                            </div>

                            <p class="tc">Supremo Kaioshin</p>

                            <div class="custo">

                                <img src="assets/midias/icons/dinheiro.png">
        
                                <p>$100</p>
        
                            </div>
                            
                            <div class="comprar">

                                <form method="post" action="../app/models/inserirInventario.php">

                                    <button type="submit">Comprar</button>

                                </form>

                            </div>

                        </div>

                        <div class="titulo-container">

                            <div class="titulo-card">                            

                                <p class="n">#17</p>

                            </div>

                            <p class="tc">Ciborgue Imbatível</p>

                            <div class="custo">

                                <img src="assets/midias/icons/dinheiro.png">
        
                                <p>$100</p>
        
                            </div>
                            
                            <div class="comprar">

                                <form method="post" action="../app/models/inserirInventario.php">

                                    <button type="submit">Comprar</button>

                                </form>

                            </div>

                        </div>

                        <div class="titulo-container">

                            <div class="titulo-card">                            

                                <p class="n">#18</p>

                            </div>

                            <p class="tc">Majin Invencível</p>

                            <div class="custo">

                                <img src="assets/midias/icons/dinheiro.png">
        
                                <p>$100</p>
        
                            </div>
                            
                            <div class="comprar">

                                <form method="post" action="../app/models/inserirInventario.php">

                                    <button type="submit">Comprar</button>

                                </form>

                            </div>

                        </div>

                        <div class="titulo-container">

                            <div class="titulo-card">                            

                                <p class="n">#19</p>

                            </div>

                            <p class="tc">Senhor do Tempo</p>

                            <div class="custo">

                                <img src="assets/midias/icons/dinheiro.png">
        
                                <p>$100</p>
        
                            </div>
                            
                            <div class="comprar">

                                <form method="post" action="../app/models/inserirInventario.php">

                                    <button type="submit">Comprar</button>

                                </form>

                            </div>

                        </div>

                        <div class="titulo-container">

                            <div class="titulo-card">                            

                                <p class="n">#20</p>

                            </div>

                            <p class="tc">Sobrevivente do Apocalipse</p>

                            <div class="custo">

                                <img src="assets/midias/icons/dinheiro.png">
        
                                <p>$100</p>
        
                            </div>
                            
                            <div class="comprar">

                                <form method="post" action="../app/models/inserirInventario.php">

                                    <button type="submit">Comprar</button>

                                </form>

                            </div>

                        </div>

                        <div class="titulo-container">

                            <div class="titulo-card">                            

                                <p class="n">#21</p>

                            </div>

                            <p class="tc">Tirano Galáctico</p>

                            <div class="custo">

                                <img src="assets/midias/icons/dinheiro.png">
        
                                <p>$100</p>
        
                            </div>
                            
                            <div class="comprar">

                                <form method="post" action="../app/models/inserirInventario.php">

                                    <button type="submit">Comprar</button>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>
                
                <div class="informacoes-titulos">
                
                   
                    <div class="perfil">

                        <div class="foto-perfil"><img src="<?php echo $_SESSION["path"]; ?>" /></div>

                        <div class="bkg-perfil">
                        
                            <p class="nick" ><?php echo $_SESSION["nome"]?></p>

                            <img style="display: <?php echo $displayStyle; ?>;" src="<?php echo isset($_SESSION["gif"]) ? $_SESSION["gif"] : '' ?>">

                            <p class="tc" style="margin-top: <?php echo isset($_SESSION["gif"]) ? "-40px" :  "20px" ?>;"><?php echo isset($_SESSION["titulo"]) ? $_SESSION["titulo"] : ''; ?></p>
                        
                        </div>

                    </div>

                    <div class="dinheiro">

                        <img src="assets/midias/icons/dinheiro.png">

                        <p><?php echo $saldo?></p>

                    </div>

                    <div class="voltar">

                        <button class="voltar-categorias"><img src="assets/midias/icons/icons8-voltar-64.png">Voltar</button>

                    </div>

                </div>

            </div>

            <div class="shop-perfil categoria-container">

                <div class="produtos produtos-pf">

                    <div class="coluna1">
                            
                        <div class="gif-perfil">

                            <img src="assets/midias/backgroundPerfil/goku-&-kuririn.gif">
                            
                            <div class="background-aside prod-gif">

                                <div class="titulo-card">                            

                                    <p class="n">#1</p>

                                    <h2>Goku e kuririn</h2>

                                </div>
                                    
                                <div class="custo">

                                    <img src="assets/midias/icons/dinheiro.png">
            
                                    <p>$1500</p>
            
                                </div>
                                
                                <div class="comprar">

                                    <form method="post" action="../app/models/inserirInventario.php">

                                        <button type="submit">Comprar</button>

                                    </form>

                                </div>

                            </div>

                        </div>
                        
                        <div class="gif-perfil">

                            <img src="assets/midias/backgroundPerfil/goku-nuvem-voadora.webp">
                            
                            <div class="background-aside prod-gif">

                                <div class="titulo-card">                            

                                    <p class="n">#2</p>

                                    <h2>Goku na nuvem</h2>

                                </div>
                                    
                                <div class="custo">

                                    <img src="assets/midias/icons/dinheiro.png">
            
                                    <p>$1500</p>
            
                                </div>
                                
                                <div class="comprar">

                                    <form method="post" action="../app/models/inserirInventario.php">

                                        <button type="submit">Comprar</button>

                                    </form>

                                </div>

                            </div>

                        </div>
                        
                        <div class="gif-perfil">

                            <img src="assets/midias/backgroundPerfil/goku-vs-vegeta.gif">
                            
                            <div class="background-aside prod-gif">

                                <div class="titulo-card">                            

                                    <p class="n">#3</p>

                                    <h2>Goku vs vegeta</h2>

                                </div>
                                    
                                <div class="custo">

                                    <img src="assets/midias/icons/dinheiro.png">
            
                                    <p>$1500</p>
            
                                </div>
                                
                                <div class="comprar">

                                    <form method="post" action="../app/models/inserirInventario.php">

                                        <button type="submit">Comprar</button>

                                    </form>

                                </div>

                            </div>

                        </div>
                        
                        <div class="gif-perfil">

                            <img src="assets/midias/backgroundPerfil/mais-de-8000.gif">
                            
                            <div class="background-aside prod-gif">

                                <div class="titulo-card">                            

                                    <p class="n">#4</p>

                                    <h2>+8000</h2>

                                </div>
                                    
                                <div class="custo">

                                    <img src="assets/midias/icons/dinheiro.png">
            
                                    <p>$1500</p>
            
                                </div>
                                
                                <div class="comprar">

                                    <form method="post" action="../app/models/inserirInventario.php">

                                        <button type="submit">Comprar</button>

                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="coluna2">
                            
                        <div class="gif-perfil">

                            <img src="assets/midias/backgroundPerfil/mestre-kame-house.gif">
                            
                            <div class="background-aside prod-gif">

                                <div class="titulo-card">                            

                                    <p class="n">#5</p>

                                    <h2>Casa do mestre</h2>

                                </div>
                                    
                                <div class="custo">

                                    <img src="assets/midias/icons/dinheiro.png">
            
                                    <p>$1500</p>
            
                                </div>
                                
                                <div class="comprar">

                                    <form method="post" action="../app/models/inserirInventario.php">

                                        <button type="submit">Comprar</button>

                                    </form>

                                </div>

                            </div>

                        </div>
                        
                        <div class="gif-perfil">

                            <img src="assets/midias/backgroundPerfil/mestre-kame-oculos.gif">
                            
                            <div class="background-aside prod-gif">

                                <div class="titulo-card">                            

                                    <p class="n">#6</p>

                                    <h2>Visões do mestre</h2>

                                </div>
                                    
                                <div class="custo">

                                    <img src="assets/midias/icons/dinheiro.png">
            
                                    <p>$1500</p>
            
                                </div>
                                
                                <div class="comprar">

                                    <form method="post" action="../app/models/inserirInventario.php">

                                        <button type="submit">Comprar</button>

                                    </form>

                                </div>

                            </div>

                        </div>
                        
                        <div class="gif-perfil">

                            <img src="assets/midias/backgroundPerfil/mestre-kame-surpreso.gif">
                            
                            <div class="background-aside prod-gif">

                                <div class="titulo-card">                            

                                    <p class="n">#7</p>

                                    <h2>Surpresa do mestre</h2>

                                </div>
                                    
                                <div class="custo">

                                    <img src="assets/midias/icons/dinheiro.png">
            
                                    <p>$1500</p>
            
                                </div>
                                
                                <div class="comprar">

                                    <form method="post" action="../app/models/inserirInventario.php">

                                        <button type="submit">Comprar</button>

                                    </form>

                                </div>

                            </div>

                        </div>
                            
                        <div class="gif-perfil">

                            <img src="assets/midias/backgroundPerfil/sheilong.gif">
                            
                            <div class="background-aside prod-gif">

                                <div class="titulo-card">                            

                                    <p class="n">#8</p>

                                    <h2>Sheilong</h2>

                                </div>
                                    
                                <div class="custo">

                                    <img src="assets/midias/icons/dinheiro.png">
            
                                    <p>$1500</p>
            
                                </div>
                                
                                <div class="comprar">

                                    <form method="post" action="../app/models/inserirInventario.php">

                                        <button type="submit">Comprar</button>

                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div class="informacoes-perfil">
                    
                    <div class="perfil">

                        <div class="foto-perfil"><img src="<?php echo $_SESSION["path"]; ?>" /></div>

                        <div class="bkg-perfil">
                        
                            <p class="nick" ><?php echo $_SESSION["nome"]?></p>

                            <img style="display: <?php echo $displayStyle; ?>;" src="<?php echo isset($_SESSION["gif"]) ? $_SESSION["gif"] : '' ?>">

                            <p class="tc" style="margin-top: <?php echo isset($_SESSION["gif"]) ? "-40px" :  "20px" ?>;"><?php echo isset($_SESSION["titulo"]) ? $_SESSION["titulo"] : ''; ?></p>
                        
                        </div>

                    </div>

                    <div class="dinheiro">

                        <img src="assets/midias/icons/dinheiro.png">

                        <p><?php echo $saldo?></p>

                    </div>

                    <div class="voltar">

                        <button class="voltar-categorias"><img src="assets/midias/icons/icons8-voltar-64.png">Voltar</button>

                    </div>

                </div>

            </div>

        </div>

        <div class="ranking">

        
            <div class="tabela">

                <table>
                    
                    <thead>

                        <th>N°</th>

                        <th>Perfil do jogador</th>

                        <th>Vitorias</th>

                    </thead>

                    <tbody>

                        <?php 

                        $mysql = "SELECT nick, vitorias FROM jogadores"; 

                        $pdo = Conexao::conectar('../app/conf/conf.ini');

                        $stmt = $pdo->prepare($mysql);
                        $stmt->execute();

                        $vitorias = $stmt->fetchAll(PDO::FETCH_ASSOC);

                        $ordem = [];

                        if (!empty($vitorias)) {

                            $ordem[0] = [$vitorias[0]["nick"], $vitorias[0]["vitorias"]];

                        }

                        foreach ($vitorias as $key => $item) { 

                            if ($key > 0) {

                                // Comparar com o último elemento adicionado no array ordem
                                if ($item["vitorias"] > $ordem[count($ordem) - 1][1]) {

                                    // Adiciona no início se as vitórias forem maiores
                                    array_unshift($ordem, [$item["nick"], $item["vitorias"]]);

                                } else {

                                    // Adiciona ao final se não for maior
                                    array_push($ordem, [$item["nick"], $item["vitorias"]]);

                                }

                            }

                        }

                        for($i = 1; $i <= count($ordem); $i++){

                            $nickNum = $ordem[$i-1][0];

                            if($nickNum == $_SESSION["nome"]){

                                $suaPos = $i;

                            }

                            $vitoriasNum = $ordem[$i-1][1];

                            if($i == 1){

                                $pos = "🥇";

                                $color = "#DAA520";

                            }elseif($i == 2){

                                $pos = "🥈";

                                $color = "#A9A9A9";

                            }elseif($i == 3){

                                $pos = "🥉";

                                $color = "#8C4B2A";

                            }else{

                                $pos = $i;

                                $color = "rgba(128, 128, 128, 0.5)";

                            }

                            echo "
                                <tr>

                                    <td style='background-color: $color;' class='posicao-tabela'>$pos</td>

                                    <td>$nickNum</td>

                                    <td>$vitoriasNum</td>

                                </tr>";
                            


                        }

                        ?>

                    </tbody>

                </table>

            </div>           

            <div class="informacoes-ranking">
                
                <div class="usuario">

                    <div class="foto-perfil"><img src="<?php echo $_SESSION["path"]; ?>" /></div>

                    <div class="bkg-perfil">
                        
                        <p class="nick" ><?php echo $_SESSION["nome"]?></p>

                        <img style="display: <?php echo $displayStyle; ?>;" src="<?php echo isset($_SESSION["gif"]) ? $_SESSION["gif"] : '' ?>">

                        <p class="tc" style="margin-top: <?php echo isset($_SESSION["gif"]) ? "-40px" :  "20px" ?>;"><?php echo isset($_SESSION["titulo"]) ? $_SESSION["titulo"] : ''; ?></p>
                        
                    </div>

                </div>
                
                <div class="info">Ganhe e Suba no Ranking</div>

                <div class="posicao">

                    <h1>Nº <?php echo $suaPos ?></h1>

                </div>

                <div class="voltar">

                    <button id="voltarRanking"><img src="assets/midias/icons/icons8-voltar-64.png">Voltar</button>

                </div>

            </div> 

        </div>

    </div>

</body>
</html>