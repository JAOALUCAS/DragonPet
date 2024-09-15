<?php

require_once "../conf/Conexao.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $response = [];

    if (isset($_POST["email"]) || isset($_POST["nick"]) || isset($_POST["senha"])) {
        
        if (!preg_match("/^[a-zA-ZÀ-ÿ\s]+$/", $_POST["nick"])) {

            $response["error"] = "O nick contém caracteres inválidos";

        } else {

            $nick = $_POST["nick"];

            $mysqlSelect = "SELECT nick FROM jogadores WHERE nick = :nick";

            $pdo = Conexao::conectar(__DIR__ . "/../conf/conf.ini");

            $stmt = $pdo->prepare($mysqlSelect);

            $stmt->execute([":nick" => $nick]);

            if ($stmt->rowCount() > 0) {

                $response["error"] = "Nick já registrado";

            }

        }

        if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {

            $response["error"] = "Email inválido";

        } else {

            $email = $_POST["email"];

            $mysqlSelect = "SELECT email FROM jogadores WHERE email = :email";

            $pdo = Conexao::conectar(__DIR__ . "/../conf/conf.ini");

            $stmt = $pdo->prepare($mysqlSelect);

            $stmt->execute([":email" => $email]);

            if ($stmt->rowCount() > 0) {

                $response["error"] = "Email já registrado";

            }

        }

        if (!preg_match('/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]+$/', $_POST["senha"])) {

            $response["error"] = "A senha contém caracteres inválidos";

        } else {

            $senha = password_hash($_POST["senha"], PASSWORD_DEFAULT);

        }

        $arquivo = $_FILES["foto"];

        if ($arquivo["error"] != 0) {

            $response["error"] = "Falha ao enviar arquivo";

        }

        if ($arquivo["size"] > 2097152) {

            $response["error"] = "Arquivo muito grande! Max: 2MB";

        }

        $pasta = "../../public/perfilUsuario/";

        $nomeDoArquivo = $arquivo["name"];

        $novoNomeDoArquivo = uniqid();

        $extensao = strtolower(pathinfo($nomeDoArquivo, PATHINFO_EXTENSION));

        if ($extensao != "jpg" && $extensao != "png") {

            $response["error"] = "Tipo de arquivo não aceito";

        }

        $path = $pasta . $novoNomeDoArquivo . "." . $extensao;

        $deu_certo = move_uploaded_file($arquivo["tmp_name"], $path);

        if ($deu_certo && empty($response["error"])) {

            $mysqlInsert = "INSERT INTO jogadores(email, nick, senha, foto, path) VALUES(:email, :nick, :senha, :foto, :path)";

            $pdo = Conexao::conectar(__DIR__ . "/../conf/conf.ini");

            $stmt = $pdo->prepare($mysqlInsert);

            $stmt->execute([
                ":email" => $email,
                ":nick" => $nick,
                ":senha" => $senha,
                ":foto" => $nomeDoArquivo,
                ":path" => $path
            ]);

            $usuario = $stmt->fetch();

            if ($usuario) {

                header("Location: http://localhost:8000/public/");

                exit();

            }

        }

    }

    echo json_encode($response);
}

