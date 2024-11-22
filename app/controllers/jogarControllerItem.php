<?php

session_start();

$response = [
    'success' => false,
    'data' => [],
    'error' => ''
];

try{

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        $girar = $_POST["girar"] ?? null;
    
        $finalizarTurno = $_POST["finalizarTurno"] ?? null;
    
        require "../classes/GirarItens.php";
    
        if (isset($girar)) {
    
            for ($i = 1; $i <= 5; $i++) {
    
                unset($_SESSION["item$i"]);
    
            }
    
            $itens = [];
    
            $girarItens = [];
    
            $girarItens = new GirarItens(10, 1);
    
            $itens = $girarItens->girarItens();
    
            foreach($itens as $key => $item) {
    
                $i = $key + 1;
    
                $_SESSION["item$i"] = [
                    "nome" => $item[0],
                    "descricao" => $item[1],
                ];
    
            }
    
        }

        $response['success'] = true;

        $response['data'] = $_SESSION;
    
    }

} catch (Exception $e) {

    $response['error'] = $e->getMessage();

}

header('Content-Type: application/json');

echo json_encode($response);