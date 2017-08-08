/* global $, window */
/**
 * Tacho behaviour
 *
 * @package data visualisation
 * @since 2017/08/08
 * @version 1.0.0
 * @author Michael
 */
// IIFE - Immediate Invoked Function Expression
// -> object capsule!
(function () {
  'use strict';
  // - - - - - - - - - -
  // declaration
  let tacho = $('#tacho'),
      needle = $('#tacho polygon');

  // methods
  function rotateNeedle (value) {
    let transformValue = 'translate(200,200) rotate(' + value + ') scale(1,1)';
    needle.attr('transform', transformValue);
  };

  // control/events
  setInterval(function(){
    let value = Math.random() * 360;
    console.log(value);
    rotateNeedle(value);
  }, 2000);

  // - - - - - - - - - -
}());
