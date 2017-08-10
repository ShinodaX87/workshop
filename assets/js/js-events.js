/* global console, window, document */
/**
 * Javascript events
 *
 * @package webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2017/08/10
 * @version v1.0.0
 * @copyright (c) 2017 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

(function() {
    'use strict';
    // - - - - - - - - - -

    // $('body').on('click', 'rect' ,function (event) { console.log(this); })
    // d3.selectAll().on()

    // using event delegation
    document.querySelector('body').addEventListener('click', function (event) {
      // console.log(event.target);
      // console.table(event);
console.log(event.target.tagName);

      switch (event.target.tagName) {
        case 'svg':
          console.log('svg is clicked!');
          break;
        case 'rect':
          console.log('rect is clicked!');
          break;
        case 'H1':
          console.log('h1 is clicked!');
          break;
        default:
          console.log('something other is clicked!');
          break;
        }

  });    // Object

    // no rectangles while setting the listener!  :-(
    let array = document.querySelectorAll('rect'); // Array
    for (let i=0; i<array.length; i+=1) {
      array[i].addEventListener('click', function (event) { console.log(event.target); });
    }

    // - - - - - - - - - -
}());

let Constructor = function () {
  this.publicProperty = null;
  let privateProperty = 108;
};
let instance = new Constructor();

instance.publicProperty = 42;
instance.privateProperty; // undefined!
