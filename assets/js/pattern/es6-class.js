/* global console, window, document */
/**
 * Classes with es6
 *
 * @package Advanced Javascript
 * @author Michael [michael@zenbox.de]
 * @since 2017/11/29
 * @version v1.0.0
 * @copyright (c) 2017 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

(function () {
  'use strict';
  // - - - - - - - - - _
  /**
   * A Simple Shape Class
   */
  class Shape {
    /**
     * @param string id
     * @param number x
     * @param number y
     */
    constructor(id, x, y) {
      this.id = id || undefined;
      this.x = x || 0;
      this.y = y || 0;
    }
    /**
     * changes the coors of a shape
     * @param number x
     * @param number y
     * @return none
     */
    move(x, y) {
      this.x = x;
      this.y = y;
    }
  }

  let myShape = new Shape('1', 20, 20);
  myShape.move(40, 40);

  console.log(myShape);
  // - - - - - - - - - -
}());