/* global console, require */
/**
* an index application, using express
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
const express = require('express');
const router = express.Router();
const log = require('./../../my_modules/logger/logger.js');

log.prefix = "SEARCH";

// catch a request
router.get('/', function(request, response) {

  // get query object values
  let
    firstName = request.query.firstName,
    lastName  = request.query.lastName,
    data      = '',
    result    = '',
    onDataEnd = null;

  onDataEnd = function(data) {
    // call index.ejs as view template
    // some data as object to be used in a template
    response.render('search', {
      firstName: firstName,
      lastName : lastName,
      joke: data.value.joke
    });
  }

  // http://api.icndb.com/jokes/random
  // a server side request
  http.get('http://api.icndb.com/jokes/random' + '?' + 'firstName=' + firstName + '&' + 'lastName=' + lastName, function(res) {
    res.on('data', function(cnResponse) {
      data += cnResponse;
    });
    res.on('end', function() {
      result = JSON.parse(data);
      onDataEnd(result)
    });
  });

})

module.exports = router;
