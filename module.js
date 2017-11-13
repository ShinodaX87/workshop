/* global console, require */
/**
* a circle module
*
* @package responsive webdesign
* @author Michael [michael@zenbox.de]
* @since 2017/11/13
* @version v1.0.0
* @copyright (c) 2017 Michael Reichart, Cologne
* @license MIT License [https://opensource.org/licenses/MIT]
*/

    'use strict';
    // - - - - - - - - - -
    let
      circumference = null,
      _privateValue = 42;

    circumference = function (radius) {
      return 2 * Math.PI * radius;
    }

    exports.circumference = circumference;
    // - - - - - - - - - -
