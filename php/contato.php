<?php
    if ((isset($_POST['nome']) && !empty($_POST['nome'])) && (isset($_POST['email']) && !empty($_POST['email'])) && (isset($_POST['mensagem']) && !empty($_POST['mensagem']))) {
        $nome = addcslashes($_POST['nome']);
        $email = addcslashes($_POST['email']);
        $subject = addcslashes($_POST['assunto']);
        $mensagem = addcslashes($_POST['mensagem']);

        $to = "jonatasdasilvasantos@outlook.com";
        $assunto = "Contato do meu site - ";
        $body = "Nome: ".$nome."\n".
                "E-mail: ".$email."\n".
                "Assunto: ".$assunto.$subject."\n".
                "Mensagem: ".$mensagem;
        $header = "From:jonatasdasilvasantos@outlook.com"."\r\n"."Reply-To:".$email."\r\n"."X=Mailer:PHP/".phpversion();
        if (mail($to, $subject, $body, $header)){
            echo("Email enviado com sucesso!");
        }else {
            echo("Ocorreu algum problema, por favor tente novamente!!");
        }
    } else {
        echo("Alguma informação importante está faaltando por favor tente novamente!!");
    }
?>