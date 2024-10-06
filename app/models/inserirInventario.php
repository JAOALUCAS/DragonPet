<?php

if(!isset($_SESSION)){

    session_start();

}

require_once "../conf/Conexao.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $response = [];

    //Pegar infos do item
    $infoItem = $_POST["infoItem"];

    $infoSeparadas = explode(",", $infoItem);

    $categoria = $infoSeparadas[0];

    $nome_item = $infoSeparadas[1];

    //Limpar o valor
    $custoSemSimbolo = str_replace('$', '', $infoSeparadas[2]);

    $custo = (int)$custoSemSimbolo;

    //Toda compra faz com que o item seja equipado automaticamente
    $equipado = $infoSeparadas[3];
    
    //Conseguir o saldo
    $id = $_SESSION["id"];

    $mysql = "SELECT saldo FROM jogadores WHERE id= :id";

    $pdo = Conexao::conectar('../conf/conf.ini');
    
    $stmt = $pdo->prepare($mysql);
    
    $stmt->execute([":id" => $id]);
    
    $saldo = $stmt->fetch();

    //Verificar e em caso de sucesso, armazenar
    if($saldo[0] >= $custo){

        //Diminuir o saldo
        $novoSaldo = (int)$saldo[0] - $custo;

        $mysql = "UPDATE jogadores SET saldo = :novoSaldo WHERE id = :id";

        $pdo = Conexao::conectar('../conf/conf.ini');
        
        $stmt = $pdo->prepare($mysql);
        
        $stmt->execute([
            ":id" => $id,
            ":novoSaldo" => $novoSaldo
        ]);

        //Não deixar um item de mesma categoria equipado ao mesmo tempo
        $naoEquipado = "nao equipado";

        $mysql = "UPDATE inventario SET equipado = :naoEquipado WHERE id_jogador = :id  AND categoria = :categoria";

        $pdo = Conexao::conectar('../conf/conf.ini');
        
        $stmt = $pdo->prepare($mysql);
        
        $stmt->execute([
            ":id" => $id,
            ":categoria" => $categoria,
            ":naoEquipado" => $naoEquipado
        ]);

        //Garantir inserção 
        $mysqlInsert = "INSERT INTO inventario(id_jogador, categoria, nome_item, equipado) VALUES(:id_jogador, :categoria, :nome_item, :equipado)";

        $pdo = Conexao::conectar(__DIR__ . "/../conf/conf.ini");

        $stmt = $pdo->prepare($mysqlInsert);

        $stmt->execute([
            ":id_jogador" => $id,
            ":categoria" => $categoria,
            ":nome_item" => $nome_item,
            ":equipado" => $equipado
        ]);

    }else{

         $response["error"] = "Saldo insuficiente";

    }

    header("Location: http://localhost:8000/public/");
    
    echo json_encode($response);

}