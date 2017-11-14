/* global console, window, document */
/**
 * a logger class
 *
 * @package responsive webdesign
 * @author Michael [michael@zenbox.de]
 * @since 2017/11/13
 * @version v1.0.0
 * @copyright (c) 2017 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

'use strict';

// declaration
let Log = null;

// class
// class Log {}
Log = function () {
  this.string = null;
  this.object = null;
  this.prefix = null;
};

// methods
Log.prototype.asString = function (value)  {
  console.log(this.prefix);
  console.log(value);
};
Log.prototype.asObject = function (object) {
  console.log(this.prefix);

  let array = [];
  for (let key in object) {
    array.push(key);
  }
  array.sort();
  for (let i=0, len=array.length; i<len; i+=1) {
    console.log(array[i]);
  }
};

// propagation
module.exports = new Log();
