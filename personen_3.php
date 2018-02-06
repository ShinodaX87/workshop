<?php
/**
 * Daten der Personen als Liste ausgeben
 * @author Michael
 * @version 0.0.1
 */
error_reporting(0); // E_ALL

// Daten (model)
// Hans Müller, geboren 1980;
// Petra Kaiser, geboren 1992;
// Calvin Hobbes, geboren 2003;
// Chantal Myers, geboren 2004

$personen = [
  array('name' => "Hans Müller", 'geburtsJahr' => 1980),
  array('name' => "Petra Kaiser", 'geburtsJahr' => 1992),
  array('name' => "Calvin Hobbes", 'geburtsJahr' => 2003),
  array('geburtsJahr' => 2004, 'name' => "Chantal Myers")
];

?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Personenliste</title>
  </head>
  <body>
    <h1>Personen</h1>
    <h2>Ausgabe des 2-D Arrays, assoziativ</h2>
    <ul>
      <?php for ($index=0; $index<count($personen); $index+=1) {
    ?>
      <li><?php print $personen[$index]['name']; ?> (<?php echo date('Y') - $personen[$index]['geburtsJahr']; ?>)</li>
    <?php

} ?>
    </ul>

  </body>
</html>
