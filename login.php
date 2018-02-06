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
      // Verbindung zur Datenbank herstellen
      $host     = 'localhost';   // '20.1.173.237';
      $user     = 'root';        // 'schule10';
      $passwd   = 'root';        // 'hallo1';
      $database = 'application'; // 'application';
      try {
          $link = mysqli_connect($host, $user, $passwd);
          mysqli_select_db($link, $database);
      } catch (Exception $error) {
          die('Aaaarghhhhhh!');
      }

      // Datensatz mit den Anmeldedaten erfragen
      $sql = "
        SELECT
          username, email, password
        FROM
          user
        WHERE
          email = '$email'
        AND
          password = '$password'
        ;
      ";

      $result = mysqli_query($link, $sql);

      // wenn genau ein Datensatz gefunden wird
      if ($result->num_rows === 1) {
          $isLogin = true;
          $row = mysqli_fetch_assoc($result);
          $dataUsername = $row['username'];
          $dataEmail    = $row['email'];
          $dataPassword = $row['password'];
      } else {
          $isLogin = false;
      }

      // // Alle Daten erfragen
      // $sql = "SELECT * FROM user;";
      // $result = mysqli_query($link, $sql);
      //
      // // Daten lesbar machen
      // while ($row = mysqli_fetch_assoc($result)) {
      //     // Einzelne Zeile als Array ausgeben
      //   // Schnellausgabe
      //   // var_dump($row);
      //   //  echo '<br>';
      //   echo $row['username'];
      //     echo '<br/>';
      // }
  }

?>
<!DOCTYPE html><!-- 5ffVk9Fl_PlO -->
<html>
  <head>
    <meta charset="utf-8">
    <title>Login Formular</title>
  </head>
  <body>

    <?php if ($isLogin !== true) {
    ?>
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
<?php 
} ?>

<?php if ($isLogin === true) {
    ?>
    <!-- Ergebnis bei Login -->
    <h1>Greetings</h1>
    <ul>
      <li>Hallo User ...</li>
    </ul>
    <!-- /Ergebnis bei Login -->
<?php

} ?>
  </body>
</html>
