/* global console, window, document */
/**
 * Promises
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
  let get = null;

  // METHODS
  get = function (url) {
    return new Promise(function (resolve, reject) {
      // - - - - - - - - - - -
      let request = new XMLHttpRequest();

      request.open('GET', url);

      // readyState == 4
      request.onload = function () {
        switch (request.status) {
        case 200:
          // do something to reach a resolve value
          // ...
          resolve(request.response);
          break;
        case 404:
        case 501:
        default:
          // do something to reach a reject value
          //  ...
          reject(Error(request.statusText));
          break;
        }

      };
      // network error
      request.onerror = function () {};

      request.send();
      // - - - - - - - - - - -
    });
  };

  // CONTROL
  get('_story.json')
    // resolve/success
    .then(function (response) {
      console.log('promise fulfilled!', response);
    })
    // reject/error
    .catch(function (error) {
      console.error('promise rejected!', error);
    });
  // - - - - - - - - - -
}());