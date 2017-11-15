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
const express = require('express');
const router  = express.Router();
const mysql = require('mysql');

// database server connection
let
  dbConfig = require('./../db-config'),
  db = null,
  sql = undefined;

dbConfig.database = dbConfig.more.database;
db = mysql.createConnection(dbConfig);


// catch a request
router.get('/', function (request, response) {
  // getting data from db
  sql = "SELECT * FROM user WHERE 1;";
  db.query(sql, function (error, result) {

  if (error) { console.log(error); process.exit(0); }

  console.log(result);

    // call index.ejs as view template
    // some data as object to be used in a template
    response.render('index', {
      result : result
    });
  });
})

module.exports = router;
