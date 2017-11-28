/* global console, document */
/**
 * a login module
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
  // DECLARATION

  // variables (primitive values, then objects)
  let formLogin = document.querySelector('#form-login'),

    // methods
    collectLoginData = null,
    sendLoginData = null,
    showLoginResult = null,

    // event handler
    onSubmitFormLogin = null;

  // METHODS
  onSubmitFormLogin = function(event) {
    // avoid browser event handling
    event.preventDefault();
    // avoid futher bubbling (and multiple event processing)
    event.stopPropagation();

    let form = event.target;

    // do the next step and prepare the further processing via callback
    collectLoginData(form, sendLoginData, showLoginResult);
  };

  showLoginResult = function (responseObject) {
    document.querySelector('#form-login').remove();
    document.querySelector('#result').innerHTML = JSON.stringify(responseObject);
  };

  sendLoginData = function(data) {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', function () {
      if (xhr.readyState === 4 && xhr.status===200) {
        showLoginResult(JSON.parse(xhr.response));
      }
    });

    xhr.open(data.method, data.url);
    xhr.send(data);
  };

  collectLoginData = function(f, c) {
    let form = f || undefined,
      callback = c || undefined,
      emailValue = undefined,
      passwordValue = undefined,
      data = {};

    if (!form)
      return false;

    // directly reading values
    emailValue = document.querySelector('#login-email').value;
    passwordValue = document.querySelector('#login-password').value;

    // more generic way
    for (let i = 0; i < form.length; i++) {
      let name = undefined,
        value = undefined;

      name = form[i].name;
      value = form[i].value;

      // join name/value pairs as an object!
      data[name] = value;
    }

    // add form data
    data.url = form.action;
    data.method=form.method;

    callback(data); // means: sendLoginData(data)

  }

  // CONTROL
  formLogin.addEventListener('submit', onSubmitFormLogin, false);
  // document.body.addEventListener('submit', onSubmitFormLogin, false);

  // - - - - - - - - - -
}());

// loginForm.addEventListener('submit', function (event) { let status = false;  onSubmitFormLogin(event); })

// loginForm.addEventListener('submit', function () { console.log('yes!');});

//
// addEventListener = function (eventType, eventHandler) {
// let event = {};
//   if (eventType === 'submit') {
//     event.type = 'submit';
//   }
//   event.timeStamp = new Date();
//   event.preventDefault = function () { tell browser return false; }
//
//    callback!
//   eventHandler(event);
// }
