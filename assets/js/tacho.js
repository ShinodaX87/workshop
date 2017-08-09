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
      needle = $('#tacho polygon'),
      rotate = 0,
      output = $('output'),
      socket = new WebSocket('ws://localhost:1337');

  // methods
  function rotateNeedle (value) {
    let transformValue = 'translate(200,200) rotate(' + value + ') scale(1,1)';
    needle.attr('transform', transformValue);
  };

  function writeToOutput (value) {
    output.html(value);
  }

  // control/events
  socket.onopen = function () {
    socket.send('willy go ...');
  };

  socket.onerror = function (error) {
    console.log('socket error ...');
    console.dir(error);
    console.table(error);
    console.error(error);
  };

  socket.onmessage = function (event) {
    let data = JSON.parse(event.data);

    if (typeof data.rotate === 'number') {
      rotate += data.rotate;
      rotateNeedle(rotate);
      writeToOutput(rotate);
    }
  };

  // setInterval(function(){
  //   let value = Math.random() * 360;
  //   console.log(value);
  //   rotateNeedle(value);
  // }, 2000);

  // - - - - - - - - - -
}());
