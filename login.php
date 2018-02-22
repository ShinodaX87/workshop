<?php
/**
 * Control for Login
 * @desc gets login data,
 *       checks for a valid user in database
 *       and builds some greetings
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2018/02/22
 * @version v1.0.0
 * @copyright (c) 2018 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

  // include classes
  require_once('app/classes/Db.php');
  require_once('app/classes/User.php');

  // receive the form values
  $email    = $_POST['email'];
  $password = $_POST['password'];

  // look in database
  $sql = "SELECT * FROM user WHERE email='$email' AND password='$password';";

  // create a database object
  $db = new Db();
  $db->query($sql);

?><!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>login</title>
  </head>
  <body>

<form id="form-login" action="login.php" method="post">
  <fieldset>
    <legend>Login</legend>

    <label for="login-email">Email</label>
    <input  id="login-email" type="email" name="email" value="michael@zenbox.de">

    <label for="login-password">Password</label>
    <input  id="login-password" type="password" name="password" value="geheim">

    <button type="submit">Login</button>
  </fieldset>
</form>


  </body>
</html>
