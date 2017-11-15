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

(function () {
  'use strict';
  // - - - - - - - - - -
  // initialize socket io
  let socket = io();

  socket.on('connect', function () {
    console.log('socket connected!');
  });

  // - - - - - - - - - -
}());
