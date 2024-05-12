<?php

$validar = $_GET['validar'];

if(isset($validar) == true){
    $girarCarta = new GirarCarta(, ); 
    $girarCarta->analisarTurno();
    $personagens = $girarCarta->girarCarta();
}else{
    echo "Algo deu errado";
}