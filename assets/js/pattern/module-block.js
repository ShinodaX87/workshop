/* global console, window, document */
/**
 * Module Block Pattern
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
  let
    _fn = {},
    fn = null;

  // CONSTRUCTORS
  function Message(msg) {
    this.message = msg || 'no message available';
  };

  Message.prototype.show = function () {
    console.log(this.message);
  };

  // METHODS
  _fn = {
    log: function () {},
    alert: function () {},
    tooltip: function () {},
    notification: function () {}
  };

  // PROPAGATION
  // Default Operator / Coalescing
  // // global namespace
  window.Capitan = window.Capitan || {};

  // module code
  // decide, what is public
  fn = {
    log: _fn.log,
    notification: _fn.notification,
    Message: Message
  };
  window.Capitan.message = fn;
  // - - - - - - - - - -
}());

// external use
window.Capitan.message.log();

let m = new window.Capitan.message.Message('hello world');
m.show();
//