/* global console, window, document */
/**
 * IIFE - Imediate Invoked Function Expression
 *
 * @package responsive webdesign
 * @author Michael [michael@zenbox.de]
 * @since 2017/11/27
 * @version v1.0.0
 * @copyright (c) 2017 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

( function () {
  'use strict';
// - - - - - - - - - -
  let
     message = 'runs1',
     _fn = {};

     _fn.log = function (m) {
       let message = m || 'no message';

       console.log(message);
     }



// - - - - - - - - - -
  window.capitan = capitan || {};
  window.capitan.log = _fn.log;
  // - - - - - - - - - -
} () );
