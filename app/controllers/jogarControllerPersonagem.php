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
    
        require "../classes/GirarCarta.php";
    
        if (isset($finalizarTurno)) {
    
            if (!isset($turno)) {
    
                $turno = 2;
    
            } else {
    
                $turno += 1;
    
            }
    
        } elseif (isset($girar)) {
    
            if (!isset($turno)) {
    
                $turno = 1;
    
            }
    
        }
    
        if (isset($girar)) {
    
            for ($i = 1; $i <= 5; $i++) {
    
                unset($_SESSION["personagem$i"]);
    
            }
    
            $personagens = [];
    
            $girarCarta = [];
    
            $girarCarta = new GirarCarta($turno, 3);
    
            $personagens = $girarCarta->girarCarta();
    
            foreach($personagens as $key => $item) {
    
                $i = $key + 1;
    
                $_SESSION["personagem$i"] = [
                    "nome" => $item[0],
                    "vida" => $item[1],
                    "ataque" => $item[2],
                    "numCard" => $i
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