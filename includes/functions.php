<?php

// Eigene Funktionen entwickeln
function pruefe($value)
{
    // Führende und anhängede Leerzeichen und Tabs abschneiden
  $value = trim($value);
  // SQL Injections
  // $value = mysql_escape_string($value);

    if ($value !== '') {
        return $value;
    }
    return false;
}

function andereFunktion()
{
}
