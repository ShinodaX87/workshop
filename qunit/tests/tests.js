/* global console, window, document, QUnit, add */
/**
 * QUnit Tests for functions.js
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

  QUnit.module("Module for add() Tests", function () {

    // test serie
    QUnit.test("add resultIs7", function (assert) {
      // boolean test for a truthy value
      assert.ok((add(3, 4) === 7), "3 + 4 === 7");
      assert.ok((add(1, 6) === 7), "1 + 6 === 7");
    });
    QUnit.test("add resultIsNot7", function (assert) {
      assert.ok((add(6, 6) !== 7), "6 + 6 !== 7");
    });
    QUnit.test("add resultIs7byFloats", function (assert) {
      assert.ok((add(1.22222222, 5.77777778) === 7), "1.22222222 + 5.77777778 === 7");
      assert.ok((add(1.2222222222222222, 5.7777777777777778) === 7), "1.2222222222222222 + 5.7777777777777778 === 7");
      assert.ok((add((0.1 + 0.2), 6.7) === 7), "(0.1 + 0.2) + 6.7 === 7");
      assert.ok((add(6.7, (0.1 + 0.2)) === 7), "6.7 + (0.1 + 0.2) === 7");
    });
    QUnit.test("add resultIsTypeOfNumber", function (assert) {
      assert.strictEqual(typeof (add(3, 4)), 'number', 'typeof(add(3,4)) is number');
      assert.strictEqual(typeof (add(3, '4')), 'boolean', 'typeof(add(3,\'4\')) is number');
    });
    QUnit.test("add resultIsNotTypeOfString", function (assert) {
      assert.notStrictEqual(typeof (add(3, 4)), 'string', 'typeof(add(3,4)) is not string');
    });
  });

  // tests for button events
  QUnit.module("Module for Button", function () {
    QUnit.test("functions_onButtonClick_onClickResultsBodyClass", function (assert) {
      // ASSERT
      // body.classList !== undefined (OK test)
      let result = true,
        button = null,
        event = null;

      // ARRANGE
      document.body.classList.remove('orange');
      button = document.createElement('button');
      button.setAttribute('id', 'button');
      document.querySelector('#qunit-fixture')
        .appendChild(button);
      event = new Event('click');
      button.addEventListener('click', window.Namespace.fn.onButtonClick);
      button.dispatchEvent(event);

      console.log(document.body.classList);

      // ACT
      result = document.body.classList.contains('orange');
      assert.ok(result, 'button clicked!');

      // TEARDOWN
      document.body.classList.remove('orange');
      document.body.removeAttribute('class');
    });
  });
  // - - - - - - - - - -
}());






//