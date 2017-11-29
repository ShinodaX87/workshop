/* global console, window, document */
/**
 * the Constructor Pattern with Prototyped Objects
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
  // - - - - - - - - - -

  // a constructor
  function Constructor() {
    // PROPERTIES
    this.property_1 = undefined;
    this.property_2 = undefined;

    // METHODS
    this.method = function () {
      console.log('runs');
    };
  }

  let instance = [];
  instance[0] = new Constructor();
  instance[1] = new Constructor();
  instance[2] = new Constructor();

  instance[0].method();
  instance[1].method();
  instance[2].method();

  // constructor
  let User = function (data) {
    let _data = data || {};

    this.preName = _data.preName || undefined;
    this.lastName = _data.lastName || undefined;
    this.email = _data.email || undefined;
  };

  // prototype
  User.prototype.setPreName = function () {};
  User.prototype.setLastName = function () {};


  // instances
  let john = new User({
    preName: 'John',
    lastName: 'Doe'
  });
  let jane = new User({
    preName: 'Jane',
    lastName: 'Doe'
  });
  let chuck = new User({
    preName: 'Chuck',
    email: 'chuck@domain.org'
  });

  console.log(john.preName);
  console.log(jane.preName);
  console.log(chuck);

  // late method
  User.prototype.setFullName = function () {};
  console.dir(john);


  // Inheritance
  let Admin = function (data) {
    // call parent class
    User.call(this, data);
    this.rights = 'canDelete';
  };

  let Editor = function (data) {
    // call parent class
    User.call(this, data);
    this.rights = 'canNotDelete';
  };
  Admin.prototype = new User();
  Admin.prototype.delete = function () {};

  Editor.prototype = new User();

  let boris = new Admin({
    preName: 'Boris',
    email: 'boris@brandung.de'
  });

  let nils = new Editor({
    preName: 'Nils',
    email: 'nils@brandung.de'
  });

  console.dir(boris);
  console.dir(nils);
  // - - - - - - - - - -
}());

// var xhr = new XmlHttpRequest()