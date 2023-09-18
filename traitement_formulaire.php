<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'chemin_vers_phpmailer/src/Exception.php';
require 'chemin_vers_phpmailer/src/PHPMailer.php';
require 'chemin_vers_phpmailer/src/SMTP.php';

// Créez une instance de PHPMailer
$mail = new PHPMailer(true);

try {
    // Paramètres du serveur SMTP pour Gmail
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'radwanee.aloui@gmail.com'; // Remplacez par votre adresse Gmail
    $mail->Password = 'R33lab347'; // Remplacez par votre mot de passe Gmail
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Paramètres de l'e-mail
    $mail->setFrom('votre_adresse_email@gmail.com', 'Votre Nom');
    $mail->addAddress('adresse_destination@example.com', 'Nom du destinataire');
    $mail->Subject = 'Sujet de l\'e-mail';
    $mail->Body = 'Contenu de l\'e-mail';

    // Envoyer l'e-mail
    $mail->send();

    echo 'Votre message a été envoyé avec succès !';
} catch (Exception $e) {
    echo 'Erreur lors de l\'envoi du message : ', $mail->ErrorInfo;
}
?>
