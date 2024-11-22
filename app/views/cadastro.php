<?php

require_once "../conf/Conexao.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") { 

    $error = "";

    if (isset($_POST["email"]) || isset($_POST["nick"]) || isset($_POST["senha"])) {
        
        if (!preg_match("/^[a-zA-ZÀ-ÿ\s]+$/", $_POST["nick"])) {

            $error = "O nick contém caracteres inválidos";

        } else {

            $nick = $_POST["nick"];

            $mysqlSelect = "SELECT nick FROM jogadores WHERE nick = :nick";

            $pdo = Conexao::conectar(__DIR__ . "/../conf/conf.ini");

            $stmt = $pdo->prepare($mysqlSelect);

            $stmt->execute([":nick" => $nick]);

            if ($stmt->rowCount() > 0) {

                $error = "Nick já registrado";

            }

        }

        if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {

            $error = "Email inválido";

        } else {

            $email = $_POST["email"];

            $mysqlSelect = "SELECT email FROM jogadores WHERE email = :email";

            $pdo = Conexao::conectar(__DIR__ . "/../conf/conf.ini");

            $stmt = $pdo->prepare($mysqlSelect);

            $stmt->execute([":email" => $email]);

            if ($stmt->rowCount() > 0) {

                $error = "Email já registrado";

            }

        }

        if (!preg_match('/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]+$/', $_POST["senha"])) {

            $error = "A senha contém caracteres inválidos";

        } else {

            $senha = password_hash($_POST["senha"], PASSWORD_DEFAULT);

        }

        $arquivo = $_FILES["foto"];

        if ($arquivo["error"] != 0) {

            $error = "Falha ao enviar arquivo";

        }

        if ($arquivo["size"] > 2097152) {

            $error = "Arquivo muito grande! Max: 2MB";

        }

        $pasta = "../../public/perfilUsuario/";

        $nomeDoArquivo = $arquivo["name"];

        $novoNomeDoArquivo = uniqid();

        $extensao = strtolower(pathinfo($nomeDoArquivo, PATHINFO_EXTENSION));

        if ($extensao != "jpg" && $extensao != "png") {

            $error = "Tipo de arquivo não aceito";

        }

        $path = $pasta . $novoNomeDoArquivo . "." . $extensao;

        $deu_certo = move_uploaded_file($arquivo["tmp_name"], $path);

        if ($deu_certo && empty($error)) {

            $saldo = 0;

            $vitorias = 0;

            $mysqlInsert = "INSERT INTO jogadores(email, nick, senha, foto, path, saldo, vitorias) VALUES(:email, :nick, :senha, :foto, :path, :saldo, :vitorias)";

            $pdo = Conexao::conectar(__DIR__ . "/../conf/conf.ini");

            $stmt = $pdo->prepare($mysqlInsert);

            $executed = $stmt->execute([
                ":email" => $email,
                ":nick" => $nick,
                ":senha" => $senha,
                ":foto" => $nomeDoArquivo,
                ":path" => $path,
                ":saldo" => $saldo,
                ":vitorias" => $vitorias
            ]);

            if($executed && $stmt->rowCount() > 0){

                echo "<div class='certo'>
                        <div class='bom'>✔</div>
                        Usuário cadastrado, <a href='./login.php'>clique aqui</a>
                    </div>";

            }else{

                $error = "Erro ao cadastrar o usuário";

            }

        }

    }

    if(!empty($error)){

        echo "<div class='error'>
                    <div class='aviso'>!</div>
                    $error
            </div>"; 

    }

}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DragonPet - cadastro</title>
    <link rel="shortcut icon" href="../../public/assets/midias/ico/dg.ico" type="image/x-icon">
    <link rel="stylesheet" href="../../public/assets/css/conta.css">
    <script src="../../public/assets/js/forms/senha.js"></script>
    <script src="../../public/assets/js/forms/validacao.js"></script>
    <script src="../../public/assets/js/forms/error.js"></script>
</head>
<body>
    
    <div class="container">
        
        <div class="form-container form-cadastro">

            <h1>Cadastra-se</h1>

            <form id="form" enctype="multipart/form-data" action="" method="post">

                <div class="email">   

                    <input type="email" name="email" placeholder="Digite seu email" class="email-required">

                    <span class="email-span-required">Digite um email válido</span>

                </div>

                <div class="nick">

                    <input type="text" name="nick" placeholder="Digite seu nick" class="nick-required">

                    <span class="nick-span-required">O nick deve conter no mínimo 3 caracteres</span>

                </div>

                <div class="senha">

                    <input type="password" name="senha" placeholder="Digite sua senha" class="senha-required">

                    <span class="senha-span-required">A senha de conter no mínimo 8 caracteres</span>

                    <div class="ocultar-senha">

                        <img src="../../public/assets/midias/icons/mostrarSenha.png">

                    </div>

                </div>
                
                <label for="foto">
                        
                    <div class="foto-perfil">

                        <img src="../../public/assets/midias/icons/adicionar-imagem.png" class="foto-img">

                        <input type="file" name="foto" accept="image/*" class="foto-required">

                        <p class="nome-arquivo"></p>

                    </div>

                    <span class="foto-span-required">Nenhum arquivo selecionado ou inválido</span>

                </label>
                
                <button type="submit">Cadastra-se</button>

            </form>

            <div class="links">

                <a href="login.php">Já possuo conta</a>

            </div>

        </div>

    </div>

</body>
</html>