<?php

    $to = "bav29cr@gmail.com"; /* cambiar por el correo del hosting */
    $nombre = $_REQUEST["nombre"];
    $de = $_REQUEST["email"];
    $telefono = $_REQUEST["telefono"];
    $asunto = $_REQUEST["asunto"];
    $mensaje1 = $_REQUEST["mensaje"];


   
//Validate first
    // if(empty($nombre)||empty($de)||empty($telefono)||empty($asunto)||empty($mensaje1)){ 
    //     echo "Ingrese los datos necesarios";
    //     exit;
    // }

    // if(IsInjected($visitor_email)) {
    // echo "Bad email value!";
    // exit;
    // }

 $mensaje = "Correo de ".$de."\r\n"."Nombre: ".$nombre."\r\n"."Tel: ".$telefono."\r\n"."Mensaje: ".$_REQUEST["mensaje"];
    $headers = "From:" . $de;

    
    
    mail($to,$asunto,$mensaje, $headers);
    echo "The email message was sent.";

//Function to validate against any email injection attempts
// function IsInjected($str)
// {
//   $injections = array('(\n+)',
//               '(\r+)',
//               '(\t+)',
//               '(%0A+)',
//               '(%0D+)',
//               '(%08+)',
//               '(%09+)'
//               );
//   $inject = join('|', $injections);
//   $inject = "/$inject/i";
//   if(preg_match($inject,$str))
//     {
//     return true;
//   }
//   else
//     {
//     return false;
//   }
// }
    

    ?>

<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

 Pueden meter cualquier html aca -->

<!-- <p>El correo fue enviado.</p>

    
</body>
</html>  -->