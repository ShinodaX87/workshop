<?php
/**
 * A User Class
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2018/02/22
 * @version v1.0.0
 * @copyright (c) 2018 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */
class User
{
    // properties
    private $property  = null;
    private $username  = null;
    private $email     = null;
    private $password  = null;
    private $lastLogin = null;
    private $surname   = null;
    private $lastname  = null;
    private $location  = null;
    private $role      = null;

    // - - - - - - - - - -
    // magic methods
    // - - - - - - - - - -
    public function __construct($s = null)
    {
        if (!empty($s)) {
            $this->surname = $s;
        }
    }

    public function __destruct()
    {
    }

    // - - - - - - - - - -
    // own methods
    // - - - - - - - - - -
    public function doSomething()
    {
        return true;
    }

    // - - - - - - - - - -
    // getter and setter
    // - - - - - - - - - -
    /**
     * Getter For Property
     * @return string returns the user surname
     */
    public function getProperty ()
    {
        return $this->property;
    }
    /**
     * Setter For Property
     * @param string $argument the users surname
     */
    public function setProperty ($argument = null)
    {
      $this->property = $argument;
    }




    public function getSurname () {
      if ($this->role === 'default') return $this->surname;
      return false;
    }

    public function setSurname ($argument = null)
    {
      if (!empty($argument) && is_string($argument)) {
        $this->surname = trim($argument);
    }


}
