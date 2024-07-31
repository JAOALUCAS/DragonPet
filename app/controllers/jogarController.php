<?php

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $girar = $_POST["girar"] ?? null;

    $finalizarTurno = $_POST["finalizarTurno"] ?? null;

    require_once "../classes/GirarCarta.php";

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

        $girarCarta = new GirarCarta($turno, 3);

        $personagens = $girarCarta->girarCarta();

        foreach($personagens as $key => $item) {

            $i = $key + 1;

            $_SESSION["nome$i"] = $item[0];

            $_SESSION["vida"] = $item[1];

            $_SESSION["ataque"] = $item[2];

            $_SESSION["numCard$i"] = $i;

        }

    }

}