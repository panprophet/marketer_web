<?php
    header('Content-Type: application/json');
    // $to = "office@marketer.rs";
    $to = "marko.ilic@buildcon.org";
    $from = $_POST["email"];
    $imeprezime = $_POST["name"];
    // if ($_POST["phone"]){
    //   $phone = $_POST["phone"];
    // }
    // $subject = $_POST["subject"];
    $subject = "Poruka sa web sajta od " . $imeprezime;
    $subject = $_POST["weburl"];
    $message = $_POST["message"];
    $message = "Poruka od:" .$imeprezime. "\r\n" .$message;
    $headers = "From: $imeprezime <$from>"."\r\n"."Reply-to: $from"."\r\n"."X-Mailer: PHP/".phpversion();

    if(mail($to, $subject, $message, $headers)) {
      echo json_encode(array("message" => "Poruka je uspešno poslata, javićemo vam se u najkraćem mogućem roku.", "status" => true ));
    } else {
      echo json_encode(array("message" => "Greška pri slanju porkue, probajte malo kasnije..", "status" => false ));
    }
  ?>
