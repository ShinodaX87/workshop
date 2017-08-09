/* global console, d3, document, window */
/**
 * first d3 examples
 *
 * @package data visualisation
 * @author Michael [michael@zenbox.de]
 * @since 2017/08/09
 * @version v1.0.0
 * @copyright (c) 2017 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

(function() {
    'use strict';
    // - - - - - - - - - -
    // declaration
    let
      chart = d3.select('#bars'), // a d3 built svg object reference
      bar = null;

    // methods


    // control/events
    // select and update/modify
    d3.selectAll('p')
      .style('color', 'hsla(0, 100%, 50%, 1)')
      .attr('class', 'paragraph');

    d3.select('body')
      .style('background-color', 'hsla(0, 100%, 10%, 1)');

    // update/modify with dynamic values
    d3.selectAll('p')
      .style('color', function () {
        return 'hsla(' + Math.random()*360 + ', 100%, 50%, 1)';
      })
      .attr('class', 'dynamic');

    // modify with bound data as dynamic value
    d3.selectAll('p')
      .data([2,4,8,14,16,23,42])
        .enter().append('p')
          .text(function (value) {
            return value + ' als Schriftgröße.';
          })
          .style('font-size', function (value) {
            return value + 'px';
          })
          .attr('id', function (value) {
            return 'p_' + value;
          });

      // drawing rectangles in svg
      bar = chart.selectAll('g')
       .data([2,4,8,14,16,23,42])
       .enter().append('g');

      bar.append('rect')
        .attr('height', function (value) { return value * 5; })
        .attr('width', '40');

      // document.querySelector('p').classList.add('dynamic');
      // document.querySelector('p').classList.remove('dynamic');
      // document.querySelector('p').classList.toggle('dynamic');

    // - - - - - - - - - -
}());
