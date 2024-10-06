<?php

require_once "../conf/Conexao.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $response = [];

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

                $response["error"] = "Senha incorreta";

            }

        } else {

            $response["error"] = "Usuário não encontrado";

        }
    }

    echo json_encode($response);

}
