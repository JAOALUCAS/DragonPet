<?php

session_start();

require_once "../conf/Conexao.php";

if($_SERVER["REQUEST_METHOD"] == "POST"){

    $error = "";

    $itemInfos = $_POST["infoItem"];

    $id = $_SESSION["id"];
    
    $arrayInfos = explode("," ,$itemInfos);

    $categoria = $arrayInfos[0];

    $nomeItem = $arrayInfos[1];
    
    $mysql = "UPDATE inventario SET equipado = 'nao equipado' WHERE id_jogador = :id_jogador AND categoria = :categoria AND equipado = 'equipado'";

    $pdo = Conexao::conectar('../conf/conf.ini');

    $stmt = $pdo->prepare($mysql);
        
    $stmt->execute([
        ":id_jogador" => $id,
        ":categoria" => $categoria
    ]);

    $itens = $stmt->fetchAll();

    if(isset($itens)){

            $mysql = "UPDATE inventario SET equipado = 'equipado' WHERE id_jogador = :id_jogador AND categoria = :categoria AND nome_item = :nome_item;";
                
            $pdo = Conexao::conectar('../conf/conf.ini');

            $stmt = $pdo->prepare($mysql);

            $stmt->execute([
                ':id_jogador' => $id,
                ':categoria' => $categoria,
                ':nome_item' => $nomeItem
            ]);
        
        $_SESSION["sucessoLoja"] = "Equipado com sucesso!";

    }else{

        $error = "Problema ao equipar o item";

    }

    if(!empty($error)){
        
        $_SESSION["errorLoja"] = $error;

    }
    
    header("Location: http://localhost:8000/public/");

}


