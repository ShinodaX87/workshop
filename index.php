<?php
// C:/MAMP/htdocs/workshop
/**
 * The App Control
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2018/02/22
 * @version v1.0.0
 * @copyright (c) 2018 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */
// @todo zum Laufen bringen!!
error_reporting(E_ALL);
ini_set('error_reporting', E_ALL);

// require is default inclusion for classes
require_once('app/classes/User.php');

// instantiating an object from a class
$user = new User('Michael');

// late setting a property's value
$user->setSurname('Karl');

// getting a property's value
echo $user->getSurname();
