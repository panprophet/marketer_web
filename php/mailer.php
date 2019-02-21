<?php
    header('Content-Type: application/json');
    $to = "office@marketer.rs";
    $from = $_POST["email"];
    $imeprezime = $_POST["name"];
    $subject = "Poruka sa web sajta od " . $imeprezime . " email: " . $from . ".";
    $weburl = $_POST["weburl"];
    $message = $_POST["message"] . " \r\n Nas websajt: " . $weburl . "";
    $message = "Poruka od:" .$imeprezime. "\r\n" .$message;
    $headers = "From: $imeprezime <$to>"."\r\n"."Reply-to: $from"."\r\n"."X-Mailer: PHP/".phpversion();

    if(mail($to, $subject, $message, $headers)) {
      echo json_encode(array("message" => "Poruka je uspešno poslata, javićemo vam se u najkraćem mogućem roku.", "status" => true ));
    } else {
      echo json_encode(array("message" => "Greška pri slanju porkue, probajte malo kasnije..", "status" => false ));
    }
  ?>
