<?php
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    if(
        !empty($_POST['first_name'])
        && !empty($_POST['last_name'])
        && !empty($_POST['email'])
        && !empty($_POST['message'])
    ){
        $fname = $_POST["first_name"];
        $lname = $_POST["last_name"];
        $email = $_POST["email"];
        $phone = $_POST["area" + "exchange" + "phone-number"];

        $to = "greauxd@gmail.com";
        $subject = "New Contact Form Submission From {$first_name}";
        $body = "Name: {$first_name} {last_name}\nEmail: {$email}\nPhone: {$area}-{$exchange}-{$phone}\nMessage: {$message}";
        $headers = "From: {$email}";

        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully";
        } else {
            echo "Failed to send message";
        }
    }
}