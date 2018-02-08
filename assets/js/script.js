/* global console, window, document */
/**
 * a sample JS application
 *
 * @package Javascript
 * @author Michael [michael@zenbox.de]
 * @since 2018/02/08
 * @version v1.0.0
 * @copyright (c) 2017 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

(function () {
  'use strict';
  // - - - - - - - - - -
  // declaration
  let
    loginForm = document.querySelector('#form-login'),
    onLoginFormSubmit = null;

  // methods
  onLoginFormSubmit = function (event) {
    // stoppt die Browserverarbeitung des Ereignisses
    event.preventDefault();

    console.log('runs');
  };

  // control, event control
  loginForm.addEventListener('submit', onLoginFormSubmit);

  // propagation
  // - - - - - - - - - -
}());