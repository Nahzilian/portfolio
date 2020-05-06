<?php
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");
if ( isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $to = 'nguyenhongduc31@gmail.com';
    $head = "You have received a letter from ".$name;
    
    if (mail($to,$subject,$head,"From: ".$name." ".$email))
    {
        echo "Message accepted";
    }
    else
    {
        echo "Error: Message not accepted";
    }
}
?>