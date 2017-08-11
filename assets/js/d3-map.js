/* global console, d3, window, document */
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
    features = svg.append('g').attr('class', 'features'),
    mercatorProjection = d3.geo.mercator(),
    path = d3.geo.path().projection(mercatorProjection);

    d3.json('assets/data/bundeslaender_simplify200.geojson', function (error, data) {

      // move map to origin
      mercatorProjection
            .scale(1)
            .translate([0, 0]);

        // calc scaling and translation
        let b = path.bounds(data),
            s = .95 / Math.max((b[1][0] - b[0][0]) / config.width, (b[1][1] - b[0][1]) / config.height),
            t = [(config.width - s * (b[1][0] + b[0][0])) / 2, (config.height - s * (b[1][1] + b[0][1])) / 2];

        // scaling/moving the map
        mercatorProjection
            .scale(s)
            .translate(t);

        features
            .selectAll("path")
            .data(data.features)
            .enter()
            .append("path")
            .attr("data-gen", function(d) {
                return d.properties.GEN;
            })
            .attr("class", "feature")
            .attr("d", path);

    });

    // - - - - - - - - - -
}());
