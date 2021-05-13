<?php 

header("Content-Type: application/json");
$data = json_decode(file_get_contents("php://input"));

$name = $data->name; 
$email = $data->email; 
$message = $data->message;
$header = "Вам письмо!"; 
$mes = "Имя: $name \nE-mail: $email \nТекст: $message"; 

$send = mail("ivvikt@mail.ru", $header, $mes); 

if ($send == 'true') {echo "true";} 
else {echo "false";} 

?>