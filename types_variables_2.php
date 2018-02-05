<?php
/**
 * mehrzeiliger Kommentar nach JavaDoc/PHPDoc
 * @author Michael
 * @since  2018/02/05
 * @version 0.0.1
 * @package my first PHP app
 */
// model
$a = 42;
// Listenvariable, Liste, mehrwertige Variablen
//         0,  1,  2,  3, ...
$array = [42, 43, 55, "hello world"];
$assoc = array('key_1' => 'value' , 'key_2' => 'other value');
$login = array(
  'username' => 'Michael' ,
  'password' => 'hallo1'
);

// control
// tu was mit dem Array
?>
<!DOCTYPE html>
<html>
<head>
 <meta charset="utf-16">
  <title>ein erstes Dokument</title>
</head>
<body>
<h1>Hello World</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<!-- view -->
<ul>
  <?php for ($index=0;$index<sizeof($array);$index+=1) {
    ?>
  <li><?php echo $array[$index]; ?></li>
  <?php

} ?>
</ul>

<ul>
  <?php foreach ($assoc as $key=>$value) {
    ?>
  <li><?php echo $key; ?>: <?php echo $value; ?></li>
  <?php 
} ?>
</ul>

<ul>
  <li><?php echo $login['username'];?></li>
  <li><?php echo $login['password'];?></li>
</ul>

</body>
</html>
