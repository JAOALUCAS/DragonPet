<?php

require_once "../conf/Conexao.php";

if($_SERVER["REQUEST_METHOD"] == "POST"){

    $response = [];

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

            }

        }else{

             $response["error"] = "Email não encontrado no sistema";

        }  

    }
    
    echo json_encode($response);

}