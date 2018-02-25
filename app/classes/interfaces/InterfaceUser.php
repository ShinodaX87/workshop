<?php
/**
 * Interface for users
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2018/02/23
 * @version v1.0.0
 * @copyright (c) 2018 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */
interface InterfaceUser
{
    const FLAG = true;

  /**
   * a simple say method
   * @param string message a string message
   */
  public function say($type, $message = null);

  /**
   * [login description]
   * @return [type] [description]
   */
  public function login();
}
