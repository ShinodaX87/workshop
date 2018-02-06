<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Login Formular</title>
  </head>
  <body>

    <h1>Login</h1>

    <form action="login.php" method="post">

      <fieldset>
        <legend>Benutzerlogin</legend>

        <label for="login-email">Email-Adresse</label>
        <input  id="login-email" type="email" name="email" value="">

        <label for="login-password">Passwort</label>
        <input  id="login-password" type="password" name="password" value="">

        <button type="submit">einloggen</button>

      </fieldset>

    </form>

  </body>
</html>
