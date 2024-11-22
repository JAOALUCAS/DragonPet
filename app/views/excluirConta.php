<?php

require_once "../conf/Conexao.php";

if($_SERVER["REQUEST_METHOD"] == "POST"){

    $error = "";

    if(isset($_POST["email"]) || isset($_POST["senha"])){
        
        $email = $_POST["email"];

        $senha = $_POST["senha"];

        $mysqlSelect = "SELECT * FROM jogadores WHERE email = :email";

        $pdo = Conexao::conectar(__DIR__ . "/../conf/conf.ini");

        $stmt = $pdo->prepare($mysqlSelect);

        $stmt->execute([":email" => $email]);

        if ($stmt->rowCount() > 0) {

            $usuario = $stmt->fetch();
                        
            if(password_verify($senha, $usuario["senha"])){

                $mysql = "DELETE FROM jogadores WHERE email = :email";

                $pdo = Conexao::conectar('../conf/conf.ini');
                
                $stmt = $pdo->prepare($mysql);
                
                $stmt->execute([":email" => $email]);

            }else{

                $error = "Senha incorreta";

            }

        }else{

             $error = "Email não encontrado no sistema";

        }  

    }

    if(!empty($error)){

        echo "<div class='error'>
                    <div class='aviso'>!</div>
                    $error
            </div>"; 

    }else{

        echo "<div class='certo'>
                        <div class='bom'>✔</div>
                        Conta excluida com sucesso. Esperamos que volte logo! 😢
                    </div>";

    }

}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DragonPet - Excluir conta</title>
    <link rel="shortcut icon" href="../../public/assets/midias/ico/dg.ico" type="image/x-icon">
    <link rel="stylesheet" href="../../public/assets/css/conta.css">
    <script src="../../public/assets/js/forms/senha.js"></script>
    <script src="../../public/assets/js/forms/validacao.js"></script>
    <script src="../../public/assets/js/forms/error.js"></script>
</head>
<body>
    
    <div class="container">

        <div class="form-container form-excluir">

            <h1>Excluir conta</h1>
            
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

                <button type="submit">Excluir conta</button>

            </form>

        </div>

    </div>

</body>
</html>