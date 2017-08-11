/* global console, window, document */
/**
 * D3 Map with realtime data
 *
 * @package webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2017/08/11
 * @version v1.0.0
 * @copyright (c) 2017 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

(function() {
    'use strict';
    // - - - - - - - - - -
    let config = {
      width : 640,
      height : 480
    },
    svg = d3.select('#map').append('svg').attr('width', config.width).attr('height', config.height),
    features = svg.append('g').attr('class', 'features');

    d3.json('assets/data/bundeslaender_simplify200.geojson', function (error, data) {
      
    });

    // - - - - - - - - - -
}());
