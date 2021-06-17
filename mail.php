<?php

$recepient = "sth@gmail.com";
$siteName = "Site";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$surname = trim($_POST["surname"]);
$email = trim($_POST["email"]);
$message = trim($_POST["comment"]);

$letter = "Имя: $name \nФамилия: $surname \nТелефон: $phone \nEmail: $email \nСообщение: $message \n";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $letter, " From: $recepient");

?>