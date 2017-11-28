/* global console, document */
/**
 * event delegation for ancors
 *
 * @package Javscript
 * @author Michael [michael@zenbox.de]
 * @since 2017/11/28
 * @version v1.0.0
 * @copyright (c) 2017 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

(function() {
  'use strict';
  // - - - - - - - - - -
  // DECLARATION
  let navigationMain = document.querySelector('#navigation-main'),
    onNavigationMainClick = null;

  // METHODS
  onNavigationMainClick = function(event) {

    switch (event.target.tagName) {
      case 'A':
        // avoid browser event handling
        event.preventDefault();
        break;
      default:
        return true;
    }

    console.dir(event);
  };

  // CONTROL
  navigationMain.addEventListener('click', onNavigationMainClick);

  // - - - - - - - - - -
}());

// jQuery Eventdelegation
// $('a[href]').on('click', function (event) {} );
// $('nav').on('click', ['a[href]', dataObject,] function (event) {} );
