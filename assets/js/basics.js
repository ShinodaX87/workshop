/* global console, window, document */
/**
 * Grundlagen Javascript
 *
 * @package Webapps
 * @author Michael [michael@zenbox.de]
 * @since 2018/02/08
 * @version v1.0.0
 * @copyright (c) 2017 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */
var _removeClass;

// Immediate Invoked Function Expression - IIFE
window.fn = (function () {
  console.log('runs');
  var b = 42;
  var a = 512;
  fn = {
    b: b;
  };
  return fn;
}());


// andere Datei
var a = window.fn.b + 108;

// Module Block Pattern
// jQuery Bibliothek
(function () {
  // Declaration
  _removeClass = function () {}; // NEVER DO THIS!!
  var _fn;
  var _a = 42;
  var _addClass = function () {};
  var _b = 108;

  // Methods, Control
  addClass = function () {
    var i = null;
    _a; // 42
    for (i = 0; i < 10; i++) {
      console.log(i);
    }

    console.log(i); // 9
  };


  _fn = {
    addClass: _addClass,
    a: _a
  };

  // Propagation
  window.jQuery = _fn;
}());

var function2 = function () {};

jQuery.addClass(); // window.jQuery.addClass();