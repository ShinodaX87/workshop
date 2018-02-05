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

<?php
// phpinfo(); // Augabe aller Informatinonen zur PHP Installation
$text = "<p>Hello World</p>";
$my_text = "lalala";
$myNewTextFromDatabase = "lalala"; // lower camel case
$myText123 = "lalala";

echo $text;

// einzeilige Kommentarzeile
# auch einzeilig, ist aber veraltet
/*
  mehrzeilige Kommentarzeile
  da kann vieles in
  vielen Zeilen stehen
 */
/**
 * mehrzeiliger Kommentar nach JavaDoc/PHPDoc
 * @author Michael
 * @since  2018/02/05
 * @version 0.0.1
 * @package my first PHP app
 */

// einfache Variablentypen
$a = 42;
$string = "Beliebig, $a Zahlen 123 und anderes !!!"; // Literale bestehen aus beliebige Zeichen
$string2 = 'auch möglich. $a'; // default für Strings!
$integer = 123;
$float = 3.14152;
$boolean = false;


echo $string;
echo $string2;
echo '<br>';
echo $integer;
echo '<br>';
echo $float;
echo '<br>';
$a = 0.1000; $b=0.2; $c=0.3;

echo(($a + $b) + $c === $a + ($b + $c));
echo $a;
echo '<br>type of $a: ';
echo gettype($a);
echo $b;
echo $c;

// Ganzzahlen und Fließkommazahlen
// int a = 42;
$a = 42;
echo '<br>type of $a: ';
echo gettype($a);


$string = "1";
$number = 1;
$boolean = true;
echo '<br>';
echo $string === $number; // Typen-Werte-Vergleich mit 3 Gleichheitszeichen ist Pflicht!!
?>
</body>
</html>
