/* global console, window, document */
/**
 * a socket client
 *
 * @package responsive webdesign
 * @author Michael [michael@zenbox.de]
 * @since 15.11.2017
 * @version v1.0.0
 * @copyright (c) 2017 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

(function() {
  'use strict';
  // - - - - - - - - - -
  // initialize socket io
  let
    socket = io(),
    form = window.document.querySelector('form')
    ;

  /*
    let socket = new WebSocket('wss://localhost:3000');
   */

  socket.on('connect', function() {
    console.log('socket connected!');

    socket.emit('myClientMessage', 'a message from a client');
  });

  socket.on('myServerMessage', function(data) {
    console.log(data);
  });

  // adding broadcast messages into a DOM element
  socket.on('myBroadcastServerMessage', function(data) {
    console.log(data);
    window.document.querySelector('output').innerHTML += data + '<br/>';
  });

  // sending messages
  form.addEventListener('submit', function (event) {
    // stop browser event processing
    event.preventDefault();

    let message = window.document.querySelector('#message').value;

    if (message !== '') {
      socket.emit('anotherClientMessage', message);
    }
  });


  // - - - - - - - - - -
}());

// docker run -p dockerport:applicationport nameImage -d
