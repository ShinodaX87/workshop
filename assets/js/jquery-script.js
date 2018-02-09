/* global console, window, document */
/**
 * jquery examples
 *
 * @package jQuery
 * @author Michael [michael@zenbox.de]
 * @since 2018/02/09
 * @version v1.0.0
 * @copyright (c) 2017 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

$(document)
  .ready(function () {
    'use strict';
    // - - - - - - - - - -
    // declaration
    let
      form = $('#form-login'),
      onFormLoginSubmit = null,
      onNavMainClick = null;

    // methods
    onFormLoginSubmit = function (event) {
      event.preventDefault();

      // ajax
      // $.get(), $.post(), $.getJson(), $.getScript(), $('article#teaser').load(url)
      let request = $.ajax({
        method: 'GET',
        url: event.target.action,
        dataType: 'json',
        data: $(event.target)
          .serialize(),
        context: $('#message')
      });
      request
        .done(function (response) {
          console.log('request done');
          console.log(response);

          $(this)
            .text(response.username);

          let context = $(event.target)
            .data('context');
          $(context)
            .text(response.username);
        })
        .fail(function (error) {
          console.log('request fail');
        })
        .always(function () {
          console.log('request always');
        });
    };

    // control, event controls
    $(form)
      .on('submit', onFormLoginSubmit);

    // Eventdelegation in jQuery
    // $('#nav-main').on('click', onNavMainClick); // do not!
    // $('#nav-main')
    //   .on('click', 'a[href]', onNavMainClick);
    // $('a[href]')
    //   .on('click', onAnchorClick);
    // propagation
    // - - - - - - - - - -
  });