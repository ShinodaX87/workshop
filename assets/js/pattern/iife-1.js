/* global console, window, document */
/**
 * Immediate Invoked Function Expression
 *
 * @package Advanced Javascript
 * @author Michael [michael@zenbox.de]
 * @author Nils
 * @since 2017/11/29
 * @version v1.0.0
 * @copyright (c) 2017 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

(function () {
  // DECLARATION
  let
    a, // primitive values: number, string
    b = false,

    arr = [],
    obj = {},

    fn = null,
    init = null;

  // METHODS
  init = function () {
    console.log('runs');
  };

  // CONTROL
  window.addEventListener('load', init);
}());