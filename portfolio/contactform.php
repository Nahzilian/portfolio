<?php
$field_name = $_POST['name'];
$field_email = $_POST['email'];
$field_message = $_POST['subject'];

$mail_to = 'ducquanbatot@gmail.com';
$subject = 'Message from a site visitor '.$field_name;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { 
   echo 1;
}
else { 
   echo 0;  
}

?> 