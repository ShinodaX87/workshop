/* global console, require */
/**
* a simple progress
*
* @package responsive webdesign
* @author Michael [michael@zenbox.de]
* @since 2017/11/13
* @version v1.0.0
* @copyright (c) 2017 Michael Reichart, Cologne
* @license MIT License [https://opensource.org/licenses/MIT]
*/

    'use strict';
    // - - - - - - - - - -
    const http = require('http');
    let
      log    = require('logger/logger.js'),
      circle = require('./module.js');

      log.prefix = 'PROCESS';

      console.log( circle.circumference(100) );

      log.asString('any value');
      log.asObject({key:'value'});

    // - - - - - - - - - -
