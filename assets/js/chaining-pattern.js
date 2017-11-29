/* global console, window, document */
/**
 * Chaining Pattern
 *
 * @package Advanced Javascript
 * @author Michael [michael@zenbox.de]
 * @since 2017/11/29
 * @version v1.0.0
 * @copyright (c) 2017 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */
(function () {
  'use strict';
  // - - - - - - - - - -
  // DECLARATION
  let Fn = null;

  // METHODS
  Fn = function () {
    this.version = '0.1';
    this.os = 'Mac Os X';
    this.browser = 'Chrome';
  };

  Fn.prototype.setVersion = function (v) {
    this.version = v || undefined;
    return this;
  };
  Fn.prototype.setOs = function (o) {
    this.os = o || undefined;
    return this;
  };
  Fn.prototype.setBrowser = function (b) {
    this.browser = b || undefined;
    return this;
  };


  // PROPAGATION
  let fn = new Fn();
  window.jQuery = fn;

  // - - - - - - - - - -
}());

// external use

jQuery
  .setVersion('1')
  .setOs('Linux')
  .setBrowser('Firefox');

jQuery.setBrowser('Safari');

console.log(jQuery);