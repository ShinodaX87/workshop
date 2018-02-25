<?php
/**
 * A Database class
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2018/02/22
 * @version v1.0.0
 * @copyright (c) 2018 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */
class Db
{
    // properties
  private $host     = null;
    private $username = null;
    private $password = null;
    private $database = null;
    public $link     = null;

  // magic methods
  public function __construct()
  {
      $this->setHost('localhost');
      $this->setUsername('root');
      $this->setPassword('root');
      $this->setDatabase('application');

      $this->connectDb();
  }

  // own methods
  protected function connectDb()
  {
      try {
          $this->setLink(true);
          return true;
      } catch (Exception $error) {
          var_dump($error);
      }
  }

/**
 * [queryAsArray description]
 * @param  [type] $sql [description]
 * @return [type]      [description]
 */
    public function queryAsArray($sql = null)
    {
        // $result = $this->query($sql);
        // $data = result2Array($result);

        $data = [
          'prename'   => 'Michael',
          'surname'   => 'Reichart',
          'username'  => 'Michael',
          'lastLogin' => '2018/02/19',
          'email'     => 'michel@zenbox.de',
          'password'  => 'geheim'
        ];

        return $data;
    }

/**
 * [query description]
 * @param  [type] $sql [description]
 * @return [type]      [description]
 */
    private function query($sql = null)
    {
        $result = mysqli_query($this->getLink(), $sql);
        return $result;
    }

/**
 * [result2Array description]
 * @param  [type] $result [description]
 * @return [type]         [description]
 */
    private function result2Array($result = null)
    {
        while ($row = mysql_fetch_assoc($result)) {
            $data[] = $row;
        }
        return $data;
    }

  // getter/setter
    /**
     * Get the value of A Database class
     *
     * @return mixed
     */
    public function getHost()
    {
        return $this->host;
    }

    /**
     * Set the value of A Database class
     *
     * @param mixed host
     *
     * @return self
     */
    public function setHost($host)
    {
        $this->host = $host;

        return $this;
    }

    /**
     * Get the value of Username
     *
     * @return mixed
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Set the value of Username
     *
     * @param mixed username
     *
     * @return self
     */
    public function setUsername($username)
    {
        $this->username = $username;

        return $this;
    }

    /**
     * Get the value of Password
     *
     * @return mixed
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Set the value of Password
     *
     * @param mixed password
     *
     * @return self
     */
    public function setPassword($password)
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Get the value of Database
     *
     * @return mixed
     */
    public function getDatabase()
    {
        return $this->database;
    }

    /**
     * Set the value of Database
     *
     * @param mixed database
     *
     * @return self
     */
    public function setDatabase($database)
    {
        $this->database = $database;

        return $this;
    }

    /**
     * Get the value of Link
     *
     * @return mixed
     */
    public function getLink()
    {
        return $this->link;
    }

    /**
     * Set the value of Link
     *
     * @param mixed link
     *
     * @return self
     */
    public function setLink($link)
    {
        $this->link = $link;

        return $this;
    }
}
