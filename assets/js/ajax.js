/* global console, window, document */
/**
 * XHML Http Requests via Javascript
 *
 * @package responsive webdesign
 * @author Michael [michael@zenbox.de]
 * @since 2017/11/28
 * @version v1.0.0
 * @copyright (c) 2017 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

(function() {
  'use strict';
  // - - - - - - - - - -
  // ES3, Javascript (MS<9: ActiveXObject)
  // DECLARATION
  let xhr = new XMLHttpRequest(),
    data = {
      email: 'michael@zenbox.de',
      password: 'geheim'
    },
    onReadyStateChange = null;

  // METHODS
  onReadyStateChange = function() {
    switch (xhr.readyState) {
      case 0:
        console.log('no request');
        break;
      case 1:
      console.log('request opened!');
        break;
      case 2:
      console.log('request sent');
        break;
      case 3:
      console.log('reponse head and data');
        if (xhr.status === 200 || xhr.status === 304) {
          console.log('yes, everything\'s alright!');
        } else if ( xhr.status === 404) {
          console.log('file not found!');
        }
        break;
      case 4:
      console.log('response done!');
      console.log(xhr.response);
      console.log(xhr.responseXml);
        break;
    }
  };

  // CONTROL
  xhr.addEventListener('readystatechange', onReadyStateChange);

  // opens an request
  xhr.open('POST', 'login.php');
  // sends an request
  xhr.send(JSON.stringify(data));

  // - - - - - - - - - -
}());
