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

// includes
require_once('Meta.php');
require_once('interfaces/InterfaceUser.php');

class User extends Meta
{
    // properties
    private $username  = null;
    private $email     = null;
    private $password  = null;
    private $lastLogin = null;
    private $surname   = null;
    private $lastname  = null;

    // - - - - - - - - - -
    // magic methods
    // - - - - - - - - - -
    /**
     * [__construct description]
     * @param string $username  [description]
     * @param string $email     [description]
     * @param string $password  [description]
     * @param string $lastLogin [description]
     * @param string $surname   [description]
     * @param string $lastname  [description]
     */
    // public function __construct(
    //   $username  = null,
    //   $email     = null,
    //   $password  = null,
    //   $lastLogin = null,
    //   $surname   = null,
    //   $lastname  = null
    // ) {
    //     $this->setUsername($username);
    //     $this->setEmail($email);
    //     $this->setPassword($password);
    //     $this->setLastLogin($lastLogin);
    //     $this->setSurname($surname);
    //     $this->setLastname($lastname);
    // }

    public function __construct($arguments)
    {
        // instantiating the parent constructor
        parent::__construct();
        parent::do();
        // foreach ($arguments as $key=>$argument) {
        //     eval('$this->set' . ucfirst($key) . '(\'' . $argument . '\');');
        // }
        $this->setUsername($arguments['username']);
        $this->setEmail($arguments['email']);
        $this->setPassword($arguments['password']);
        $this->setLastLogin($arguments['lastLogin']);
        $this->setSurname($arguments['surname']);
        $this->setLastname($arguments['lastname']);
    }

    public function __destruct()
    {
    }

    // - - - - - - - - - -
    // own methods
    // - - - - - - - - - -
    public function say($type, $message = null)
    {
    }
    public function login()
    {
    }
    public function doSomething()
    {
        return true;
    }


    /**
     * Get the value of A User Class
     *
     * @return string
     */
    public function getUsername()
    {
        return $this->username;
    }


    /**
     * Set the value of A User Class
     *
     * @param string username
     *
     * @return self
     */
    public function setUsername($username)
    {
        if (!empty($username)) {
            $this->username = $username;
        }
        return $this;
    }

    /**
     * Get the value of Email
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set the value of Email
     *
     * @param string email
     *
     * @return self
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get the value of Password
     *
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Set the value of Password
     *
     * @param string password
     *
     * @return self
     */
    public function setPassword($password)
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Get the value of Last Login
     *
     * @return string
     */
    public function getLastLogin()
    {
        return $this->lastLogin;
    }

    /**
     * Set the value of Last Login
     *
     * @param string lastLogin
     *
     * @return self
     */
    public function setLastLogin($lastLogin)
    {
        $this->lastLogin = $lastLogin;

        return $this;
    }

    /**
     * Get the value of Surname
     *
     * @return string
     */
    public function getSurname()
    {
        return $this->surname;
    }

    /**
     * Set the value of Surname
     *
     * @param string surname
     *
     * @return self
     */
    public function setSurname($surname)
    {
        $this->surname = $surname;

        return $this;
    }

    /**
     * Get the value of Lastname
     *
     * @return string
     */
    public function getLastname()
    {
        return $this->lastname;
    }

    /**
     * Set the value of Lastname
     *
     * @param string lastname
     *
     * @return self
     */
    public function setLastname($lastname)
    {
        $this->lastname = $lastname;

        return $this;
    }
}
