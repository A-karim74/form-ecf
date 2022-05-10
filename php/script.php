// $header = "MiME-Version: 1.0\r\n";
// $header.='Content-Type:texte/html; charset="utf-8"'."\n";
// $header.='Content-Transfert-Encoding: 8 bit';

// $message ='
<!-- // <html>
    //     <body>
        //         <div align="center">
            //             J\'ai envoyé ce mail depuis le formulaire de contact !
            //         </div>
            //     </body>
            // >/html>';
            // mail("antate.karim@gmail.com", "salut test ",$message ,$header);
            
            // $scucess = 0; -->
<?php

$name = $_POST['theName'];
print_r([$name]);
$firstName = $_POST['firstName'];
$phoneNumber = $_POST['phoneNumber'];
$mail = $_POST['email'];
$message = $_POSt['msg'];
$to = "antate.karim@gmail.com";

$message = wordwrap($message, 70, "\r\n");
if (isset($_POST["message"])){
    $message = " ce mail a été envoyer via le formulaire de contact ";
    nom: ".$name .";
    firstName :".$firstName.";
    phoneNumber :".$phoneNumber .";
    email : ".$mail.";
    message: ".$message.";
    $retour = mail($to, $name ,$firstName ,$phonenumber ,$message, "From:contact@monform.fr" . "\r\n" . "Replay-to:" .$mail);
    if ($retour){
        echo"envoyer";
    }    
}


?>