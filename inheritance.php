<?php

// parent class
class User
{
    private $username = null;
    private $rights = ['read'];
    const FLAG = true;

    public function getUsername()
    {
        return $this->username;
    }

    public static function say()
    {
        echo 'hallo ';
    }
}

// child class
class Administrator extends User
{
    private $rights = ['read', 'write', 'delete'];



  // overwrite the say method
  public static function say()
  {
      echo 'Guten Morgen ';
      parent::say();
  }

    public function getParentRights()
    {
        echo parent::rights;
    }
}

class Subadministrator extends Administrator
{
}

// control

$admin = new Administrator();
echo $admin->getUsername();

$admin->say(); // hallo
$subadmin = new Subadministrator();
$subadmin->say();
echo($subadmin::say());
