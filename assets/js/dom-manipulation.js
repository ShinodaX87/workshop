/* global console, window, document */
/**
 * Dom Manipulatino with Javascript
 *
 * @package responsive webdesign
 * @author Michael [michael@zenbox.de]
 * @since 2017/11/27
 * @version v1.0.0
 * @copyright (c) 2017 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */
(function() {
  'use strict';
  // - - - - - - - - - -
  // DECLARATIONS
  let fn = {},
    h1 = null,
    addClass = null,
    createTextElement = null,
    onClickOnMyButton = null,
    onClickOnMyOtherButton = null;

  // METHODS
  addClass = function(s) {
    let selector = s || undefined,
      collection = null;

    if (!selector) {
      return false;
    }

    collection = document.querySelectorAll(selector);

    for (let i = 0; i < collection.length; i += 1) {
      collection[i].setAttribute('class', 'orange');
      // collection[i].removeAttribute('class');
    }
  };

  createTextElement = function(e, c) {
    let element = e || undefined,
      content = c || undefined,
      domElement = null,
      domContent = null;

    if (!element) {
      return false;
    }
    if (!content) {
      return false;
    }

    // cretae elements and text nodes
    domElement = document.createElement(element);
    domContent = document.createTextNode(content);

    // append elements
    domElement.appendChild(domContent);
    document.body.appendChild(domElement);

  };

  onClickOnMyButton = function() {
    document.querySelector('p').remove();
  };

  onClickOnMyOtherButton = function () {
    // change an elements context
    let
      anchor = document.querySelector('a[href]'),
      target = document.querySelector('p');

      // moving a reference!
      target.appendChild(anchor);
  };

  // CONTROL
  addClass('h1');
  createTextElement('p', 'dolor sit amet consectetur.');
  addClass('p');

  document.querySelector('#my-button').addEventListener('click', onClickOnMyButton);
  document.querySelector('#my-other-button').addEventListener('click', onClickOnMyOtherButton);

  // - - - - - - - - - -
}());
