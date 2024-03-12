<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail -> CharSet = 'UTF-8';
$mail -> setLanguage('ru', 'phpmailer/language/');
$mail -> IsHTML(true);

// От кого письмо
$mail -> setFrom('Logistics@gmail.com', 'Logistics');

// Кому отправить
$mail -> addAddress('moksdm@gmail.com');

// Тема письма
$mail -> Subject = 'Новая заявка!';

$params = array();
parse_str($_POST, $params);


// Тело письма
$body = '<h1>Поступила новая заявка</h1>';

if (trim(!empty($_POST['companyName']))) {
    $body.='<p><strong>Название компании:</strong> ' .$_POST['companyName'].'</p>';
}
if (trim(!empty($_POST['email']))) {
    $body.='<p><strong>E-mail клиента:</strong> ' .$_POST['email'].'</p>';
}
if (trim(!empty($_POST['tel']))) {
    $body.='<p><strong>Телефон клиента:</strong> ' .$_POST['tel'].'</p>';
}
if (trim(!empty($_POST['from']))) {
    $body.='<p><strong>Место отправки:</strong> ' .$_POST['from'].'</p>';
}
if (trim(!empty($_POST['to']))) {
    $body.='<p><strong>Место прибытия:</strong> ' .$_POST['to'].'</p>';
}
if (trim(!empty($_POST['about']))) {
    $body.='<p><strong>Информация о грузе:</strong> ' .$_POST['about'].'</p>';
}
if (trim(!empty($_POST['comment']))) {
    $body.='<p><strong>Комментарий:</strong> ' .$_POST['comment'].'</p>';
}



$mail -> Body = $body;

// try {
//     $mail->send();
// } catch(Exception $e) {
//     echo 'FAIL';
// }

// Отправляем!
if(!$mail->send()) {
    $message = 'Error';
    echo $message;
} else {
    // header('location: index.html');
    // http_response_code(200);
    // $message = 'Письмо успешно отравлено!';
    echo 1;
}

// $response = ['message' => $message];

// header('Content-type: application/json');
// echo json_encode($response);

?>