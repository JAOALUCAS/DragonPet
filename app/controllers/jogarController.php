<?php

require_once "../classes/GirarCarta.php";

if(isset($_POST["finalizarTurno"]) && !isset($turno)){

    $turno = 2;

}elseif(isset($_POST["finalizarTurno"]) && isset($turno)){

    $turno += 1;

}

if(isset($_POST["girar"]) && !isset($turno)){

    $turno = 1;

}

$girarCarta = new GirarCarta($turno, 3);
$personagens = $girarCarta->girarCarta();

foreach($personagens as $key=>$item){

    echo $item[0];
    echo $item[1];
    echo $item[2];

}