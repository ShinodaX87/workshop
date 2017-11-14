/* global console, require */
/**
* an express webserver
*
* @package responsive webdesign
* @author Michael [michael@zenbox.de]
* @since 2017/11/14
* @version v1.0.0
* @copyright (c) 2017 Michael Reichart, Cologne
* @license MIT License [https://opensource.org/licenses/MIT]
*/

'use strict';
// - - - - - - - - - -
const http = require('http');
const path = require('path');

// common js notation
const express = require('express');
const log     = require('./../my_modules/logger/logger.js');
log.prefix    = 'WEBSERVER';
// es6 notation
// import {log} from './my_modules/logger/logger.js';

// routes
const indexRoute = require(path.join(__dirname, 'routes/index.js'));

// declaration
let
  expressServer = null,
  port          = 3000;

expressServer = express();

// configuration of express
// template engine and directory
expressServer.set('view engine', 'ejs');
expressServer.set('views', path.join(__dirname, 'views') );

// dynamic routes
expressServer.use('/index.html', indexRoute);

// start express
expressServer.listen(port, function () {
  log.asString('express server runs on port ' + port);
});

// - - - - - - - - - -
