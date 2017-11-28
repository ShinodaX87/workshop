<?php
//  $email = $_POST['email'];
//  $password = $_POST['password'];
//
// $sql = "SELECT * FROM user WHERE email LIKE '$email' AND password LIKE 'password'";
// // $result = ...

$data = [
  'name'      => 'Michael',
  'email'     => 'michael@zenbox.de',
  'lastLogin' => '2017/10/22'
];

// return a JSON data:
// {
//    "name" : "Michael",
//    "email" : "michael@zenbox.de",
//    "lastLogin" : "2017/10/22"
// }
$jsonResponse = json_encode($data);
echo $jsonResponse;
