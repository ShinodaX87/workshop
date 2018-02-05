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
  ["Hans Müller", 1980],
  ["Petra Kaiser", 1992],
  ["Calvin Hobbes", 2003],
  ["Chantal Myers", 2004]
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
    <h2>Ausgabe des 2-D Arrays</h2>
    <ul>
      <?php for ($index=0; $index<count($personen); $index+=1) {
    ?>
      <li><?php print $personen[$index][0]; ?> (<?php echo 2018 - $personen[$index][1]; ?>)</li>
    <?php

} ?>
    </ul>

  </body>
</html>
