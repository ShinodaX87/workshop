<?php
  /**
   * Login Daten prüfen
   * @author Michael
   * @version 0.0.1
   */
  // Dateien einbinden
  include('includes/functions.php');

  // Daten aus dem CGI annehmen
  // $_GET/$_POST sind Arrays
  $email    = pruefe($_GET['email']);
  $password = pruefe($_GET['password']);

  // wenn gültige Eingaben geliefert sind
  if ($email !== false && $password !== false) {
      //$result = frageDatenbank($email);
  }

?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Login Formular</title>
  </head>
  <body>

    <!-- Formular bei Erstaufruf -->
    <h1>Login</h1>

    <form action="login.php" method="get">

      <fieldset>
        <legend>Benutzerlogin</legend>

        <label for="login-email">Email-Adresse</label>
        <input  id="login-email" type="email" name="email" value="michael@zenbox.de">

        <label for="login-password">Passwort</label>
        <input  id="login-password" type="password" name="password" value="hallo!">

        <button type="submit">einloggen</button>

      </fieldset>

    </form>
    <!-- /Formular bei Erstaufruf -->

    <!-- Ergebnis bei Login -->
    <h1>Greetings</h1>
    <ul>
      <li>Hallo User ...</li>
    </ul>
    <!-- /Ergebnis bei Login -->

  </body>
</html>
