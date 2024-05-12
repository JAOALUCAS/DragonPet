<?php

require_once 'GirarCarta.php';

$girarCarta = new GirarCarta(8, 10);
$g = $girarCarta->girarCarta();

var_dump($g);
