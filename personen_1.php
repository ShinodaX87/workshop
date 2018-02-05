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

$namen        = ["Hans Müller", "Petra Kaiser", "Calvin Hobbes", "Chantal Myers"];
$geburtsJahre = [1980,          1992,           2003,            2004];

$personen = array(
  "person_1" => "Hans Müller",
  "person_2" => "Petra Kaiser",
  "person_3" => "Calvin Hobbes",
  "person_4" => "Chantal Myers"
);
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Personenliste</title>
  </head>
  <body>
    <h1>Personen</h1>
    <h2>numerische Ausgabe</h2>
    <ul>
      <?php for ($index=0; $index<count($namen); $index+=1) {
    ?>
      <li><?php print $namen[$index]; ?> (<?php echo 2018 - $geburtsJahre[$index]; ?>)</li>
    <?php

} ?>
    </ul>


    <h2>assoziative Ausgabe</h2>
    <ul>
      <?php foreach ($personen as $key=>$value) {
    ?>
        <li><?php echo $value; ?></li>
      <?php

} ?>
    </ul>
  </body>
</html>
