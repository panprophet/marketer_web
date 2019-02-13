<?php
    header('Content-Type: application/json');
    // $to = "office@marketer.rs";
    $to = "marko.ilic@buildcon.org";
    $imeprezime = $_POST["name"];
    $naziv_kompanije = $_POST["naziv"];
    $from = $_POST["email"];
    $weburl = $_POST["weburl"];
    $delatnost = $_POST["cimesebavimo"];
    $usluga = $_POST["interesovanje"];
    $phone = $_POST["telefon"];

    $subject = "Poruka sa web sajta od " . $imeprezime;

    $message = "Pozdrav, ja sam " . $imeprezime . ", iz kompanije " . $naziv_kompanije .". Nasa kompanija se bavi " . $delatnost . " i zainteresovani smo za vasu uslugu " . $usluga .".";
    if($weburl != '') {
      $message = $message . " Web adresa nase stranice je " . $weburl . ".";
    }
    $message = $message . "Mozete nam pisati na email adresu " . $from . ", ili kontaktirati telefonom na " . $phone . ".";
    // $message = "Poruka od:" .$imeprezime. "\r\n" .$message;
    $headers = "From: $imeprezime <$to>"."\r\n"."Reply-to: $from"."\r\n"."X-Mailer: PHP/".phpversion();

    if(mail($to, $subject, $message, $headers)) {
      echo json_encode(array("message" => "Hvala što ste nas kontaktirali.", "message2" => "Javićemo se ubrzo!" , "status" => true ));
    } else {
      echo json_encode(array("message" => "Greška pri slanju porkue," , "message2" => "probajte malo kasnije..", "status" => false ));
    }
  ?>
