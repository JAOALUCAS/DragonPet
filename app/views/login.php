<?php

require_once "../conf/Conexao.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $error = "";

    if (isset($_POST["email"]) && isset($_POST["senha"])) {

        $email = $_POST["email"];

        $senha = $_POST["senha"];

        $mysql = "SELECT * FROM jogadores WHERE email = :email";

        $pdo = Conexao::conectar('../conf/conf.ini');

        $stmt = $pdo->prepare($mysql);
        
        $stmt->execute([":email" => $email]);

        // Verifica se o usuário foi encontrado
        $usuario = $stmt->fetch();

        if ($usuario) { 

            if (password_verify($senha, $usuario["senha"])) {

                if (!isset($_SESSION)) {

                    session_start();

                }

                $_SESSION["id"] = $usuario["id"];

                $_SESSION["nome"] = $usuario["nick"];

                $_SESSION["path"] = $usuario["path"];

                $_SESSION["saldo"] = $usuario["saldo"];

                header("Location: http://localhost:8000/public/");
                
                exit; 

            } else {

                $error = "Senha incorreta";

            }

        } else {

            $error = "Usuário não encontrado";

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
    <title>DragonPet - login</title>
    <link rel="shortcut icon" href="../../public/assets/midias/ico/dg.ico" type="image/x-icon">
    <link rel="stylesheet" href="../../public/assets/css/conta.css">
    <script src="../../public/assets/js/forms/senha.js"></script>
    <script src="../../public/assets/js/forms/validacao.js"></script>
    <script src="../../public/assets/js/forms/error.js"></script>
</head>
<body>
    
    <div class="container">

        <div class="form-container">

            <h1>Iniciar sessão</h1>

            <form id="form" action="" method="post">

                <div class="email">

                    <input type="email" name="email" id="email" placeholder="Digite seu Email" class="email-required">

                    <span class="email-span-required">Digite um email válido</span>

                </div>

                <div class="senha">

                    <input type="password" name="senha" id="senha" placeholder="Digite sua senha" class="senha-required">

                    <span class="senha-span-required">A senha de conter no mínimo 8 caracteres</span>

                    <div class="ocultar-senha ocultar-senha-login">

                        <img src="../../public/assets/midias/icons/mostrarSenha.png">

                    </div>

                </div>

                <button type="submit">Iniciar sessão</button>

            </form>

            <div class="links">

                <a href="cadastro.php">Não possuo conta</a>

                ou

                <a href="solicitarMudancaSenha.html">Alterar minha senha</a>

            </div>

        </div>

    </div>

</body>
</html>