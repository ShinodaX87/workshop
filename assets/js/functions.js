/* global console, window, document */
/**
 * some testable functions
 *
 * @package Advanced Javascript
 * @author Michael [michael@zenbox.de]
 * @since 2017/11/30
 * @version v1.0.0
 * @copyright (c) 2017 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

(function () {
  'use strict';
  // - - - - - - - - - -
  // DECLARATION
  let
    add = null,
    button = document.querySelector('#button'),
    onButtonClick = null;
  console.clear();
  console.log(button);

  // METHODS
  add = function (a, b) {
    let summand_1 = a || undefined,
      summand_2 = b || undefined;
    if (typeof (summand_1) !== 'number') {
      return false;
    }
    if (typeof (summand_2) !== 'number') {
      return false;
    }
    return (summand_1 + summand_2);
  };

  // EVENT HANDLER
  onButtonClick = function (event) {
    event.preventDefault();
    let target = document.querySelector('body');
    target.setAttribute('class', 'orange');
  };

  // EVENT CONTROL
  if (button) button.addEventListener('click', onButtonClick);

  // PROPAGATION
  window.add = add;
  window.Namespace = {};
  window.Namespace.fn = {};
  window.Namespace.fn.onButtonClick = onButtonClick;
  // - - - - - - - - - -
}());



//