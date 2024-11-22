<?php

session_start();

require_once "../conf/Conexao.php";

if($_SERVER["REQUEST_METHOD"] == "POST"){

    $error = "";

    $itemInfos = $_POST["infoItem"];

    $id = $_SESSION["id"];
    
    $arrayInfos = explode("," ,$itemInfos);

    $nomeItem = $arrayInfos[1];
    
    $mysql = "UPDATE inventario SET equipado = 'nao equipado' WHERE id_jogador = :id_jogador AND nome_item = :nome_item";

    $pdo = Conexao::conectar('../conf/conf.ini');

    $stmt = $pdo->prepare($mysql);
        
    $stmt->execute([
        ":id_jogador" => $id,
        ":nome_item" => $nomeItem
    ]);

    $itens = $stmt->fetchAll();

    if(isset($itens)){
        
        $_SESSION["sucessoLoja"] = "Desequipado com sucesso!";

    }else{

        $error = "Problema ao equipar o item";

    }

    if(!empty($error)){
        
        $_SESSION["errorLoja"] = $error;

    }
    
    header("Location: http://localhost:8000/public/");

}
