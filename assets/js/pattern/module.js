/* global console, window, document */
/**
 * Module Pattern
 *
 * @package Advanced Javascript
 * @author Michael [michael@zenbox.de]
 * @since 2017/11/29
 * @version v1.0.0
 * @copyright (c) 2017 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */
window.myNamespace = window.myNamespace || {};

window.myNamespace.myModule = (function () {
  'use strict';
  // - - - - - - - - - -
  // DECLARATION
  let
    _fn = null,
    fn = {};

  // METHODS
  _fn = function () {};

  //PROPAGATION
  fn = {
    fn: _fn
  };

  return fn;
  // - - - - - - - - - -
}());