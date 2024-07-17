<?php

require_once "GirarItens.php";

$g = new GirarItens(10, 1);
$a = $g->girarItens();
var_dump($a);