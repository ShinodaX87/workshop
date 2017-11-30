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

  /**
   * [Rectangle description]
   * @extends Shape
   */
  class Rectangle extends Shape {
    /**
     * [constructor description]
     * @param  {string} id     [description]
     * @param  {number} x      [description]
     * @param  {number} y      [description]
     * @param  {number} width  [description]
     * @param  {number} height [description]
     */
    constructor(id, x, y, width, height) {
      super(id, x, y);
      this.width = width;
      this.height = height;
    }
  }
  /**
   * [Circle description]
   * @extends Shape
   */
  class Circle extends Shape {
    /**
     * [constructor description]
     * @param  {string} id     [description]
     * @param  {number} x      [description]
     * @param  {number} y      [description]
     * @param  {number} radius [description]
     */
    constructor(id, x, y, radius) {
      super(id, x, y);
      this.radius = radius;
    }
    /**
     * [test description]
     * @return {[type]} [description]
     */
    test() {
      let array = [1, 2, 3];
      for (let i = 0; i < array.length; i++) {
        array[i] = 1;
      }
    }
  }

  let myShape = new Shape('1', 20, 20),
    myRectangle = new Rectangle('2', 10, 10, 20, 20),
    myCircle = new Circle('3', 130, 30, 50);

  myShape.move(40, 40);
  myRectangle.move(40, 40);
  myCircle.move(40, 40);

  console.log(myShape);
  // - - - - - - - - - -
}());