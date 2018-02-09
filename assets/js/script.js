/* global console, window, document */
/**
 * a sample JS application
 *
 * @package Javascript
 * @author Michael [michael@zenbox.de]
 * @since 2018/02/08
 * @version v1.0.0
 * @copyright (c) 2017 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */
// IIFE - Immediate Invoked Function Expression
(function () {
  'use strict';
  // - - - - - - - - - -
  // declaration
  let
    loginForm = document.querySelector('#form-login'),
    onLoginFormSubmit = null,
    onNavMainClick,
    ajax = null,
    addToDom = null,
    responseData = {};

  // methods
  addToDom = function (dataObject, context) {
    console.log(dataObject);
    console.log(context);

    let collection = document.querySelectorAll(context);
    for (let i = 0; i < collection.length; i++) {
      collection[i].innerHTML = dataObject.username;
    }

    // document.querySelector(context)
    //   .innerHTML = dataObject.username;
  };

  ajax = function (url, d, dataType, trigger) {
    // declaration
    let request = new XMLHttpRequest(),
      onReadyStateChange = null,
      data = d;

    // methods
    onReadyStateChange = function () {
      switch (request.readyState) {
      case 0:
        console.log('no request!');
        break;
      case 1:
        console.log('request opened!');
        break;
      case 2:
        console.log('request sent!');
        break;
      case 3:
        console.log('response head & first data!');
        console.log(request);
        if (request.status !== 200) {
          console.log('no data available!');
        }
        break;
      case 4:
        console.log('response more data & quit!');
        if (request.status === 200) {
          console.log(request.responseText);
          console.log(request.responseXML);

          if (dataType === 'json') {
            responseData = JSON.parse(request.responseText);
            addToDom(responseData, trigger.dataset['context']);
          }

        }
        break;
      }
    };

    // control
    request.addEventListener('readystatechange', onReadyStateChange);
    request.open('GET', url);
    request.send(JSON.stringify(data));



    // var request;
    // if (window.XMLHttpRequest) { // Mozilla, Safari, ...
    //   request = new XMLHttpRequest();
    // } else if (window.ActiveXObject) { // IE
    //   try {
    //     request = new ActiveXObject('Msxml2.XMLHTTP');
    //   }
    //   catch (e) {
    //     try {
    //       request = new ActiveXObject('Microsoft.XMLHTTP');
    //     }
    //     catch (e) {}
    //   }
    // }
  };

  onLoginFormSubmit = function (event) {
    // declaration
    let url = event.target.action,
      data = {};

    // stoppt die Browserverarbeitung des Ereignisses
    event.preventDefault();

    // Daten aus dem Formular lesen
    data.email = document.querySelector('#form-login #login-email')
      .value;
    data.email = document.querySelector('#form-login #login-password')
      .value;


    // tue das nächste
    ajax(url, data, 'json', event.target);
  };

  onNavMainClick = function (event) {
    switch (event.target.tagName) {
    case 'A':
      // do something
      break;
    case 'LI':
      // do nothing
      break;
    case 'B':
      // do nothing
      break;
    }
  };

  // control, event control
  loginForm.addEventListener('submit', onLoginFormSubmit);
  document.querySelector('#nav-main')
    .addEventListener('click', onNavMainClick);
  // propagation
  // - - - - - - - - - -
}());

// wie addEventListener arbeitet
// domObject.addEventListener = function (type, callback) {
//   let event = {
//     type : type,
//     timeStamp : new date(),
//     target : domObject // this
//     preventDefault : function () { return false; },
//     isPrevented : false;
//     ...
//   };
//
//   callback(event);
// }