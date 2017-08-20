/* global console, window, document */
/**
 * responsive javascript examples
 *
 * @package responsive webdesign
 * @author Michael [michael@zenbox.de]
 * @since 2017/08/18
 * @version v1.0.0
 * @copyright (c) 2017 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

(function() {
    'use strict';
    // - - - - - - - - - -
    console.log('hello?');
    let mediaXtraSmall = window.matchMedia('(max-width:575px)'),
        mediaSmall = window.matchMedia('(min-width:576px)'),
        mediaMedium = window.matchMedia('(min-width:992px)'),
        mediaLarge = window.matchMedia('(min-width:1200px)'),

        md = new MobileDetect(window.navigator.userAgent);


  window.onload = function () {
    if (mediaMedium.matches === true) {
      console.log('it is a medium device!');
      console.log(window.navigator.userAgent);
      console.log(window.navigator.vendor);
    }

    console.dir(md);
    console.log(md.os());
    console.log(md.phone());
    console.log(md.tablet());
    console.log(md.userAgent());
  };

    function onMediaMediumChange (event) {
      console.log('medium changed');
    };

    mediaMedium.addEventListener('change', onMediaMediumChange);
    // - - - - - - - - - -
}());
