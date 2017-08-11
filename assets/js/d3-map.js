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
      width: 640,
      height: 760
    },
    svg = d3.select('#map').append('svg').attr('width', config.width).attr('height', config.height),
    features = svg.append('g').attr('class', 'features'),
    mercatorProjection = d3.geo.mercator(),
    path = d3.geo.path().projection(mercatorProjection),
    socket = new WebSocket('ws://localhost:1337');

  d3.json('assets/data/bundeslaender_simplify200.geojson', function(error, data) {

    // move map to origin
    mercatorProjection.scale(1).translate([0, 0]);

    // calc scaling and translation
    let b = path.bounds(data),
      s = .95 / Math.max((b[1][0] - b[0][0]) / config.width, (b[1][1] - b[0][1]) / config.height),
      t = [
        (config.width - s * (b[1][0] + b[0][0])) / 2,
        (config.height - s * (b[1][1] + b[0][1])) / 2
      ];

    // scaling/moving the map
    mercatorProjection.scale(s).translate(t);

    features.selectAll("path").data(data.features).enter().append("path").attr("data-gen", function(d) {
      return d.properties.GEN;
    }).attr("class", "feature").attr("d", path);

  });

  function buildACity(r) {
    // * * * * * * * * * *
    // where are the cities?
    // * * * * * * * * * *
    // // //
    let response = [
        {
          name: 'Stuttgart',
          latitude: 48.775846,
          longitude: 9.182932,
          population: 500000
        }, {
          name: 'Köln',
          latitude: 50.941278,
          longitude: 6.958281,
          population: 1000000
        }, {
          name: 'Berlin',
          latitude: 52.521918,
          longitude: 13.413215,
          population: 3000000
        }
      ],
      locations = svg.append('g').attr('class', 'locations');
//      console.log(response[0].name + ' at ' + response[0].longitude + ', ' + response[0].latitude);

    response.push(r);
    console.log(response);
    
    d3.selectAll('circle.location').remove();


    locations.selectAll('circle')
      .data(response)
      .enter()
        .append('circle')
          .each(function(d) {
            let location = [d.longitude, d.latitude],
            radius = d.population / 100000,

            // somehow modify the draw coords
            cx = mercatorProjection(location)[0],
            cy = mercatorProjection(location)[1];

            // console.log(d.population);
            // console.log(radius);

            // // linit the drawn city radius
            // if (radius < 2) radius = 2;
            // if (radius > 25) radius = 25;

            d3.select(this)
            .attr('cx', cx)
            .attr('cy', cy)
            .attr('r', radius)
            .attr('class', 'location');
          });
        }

  // control/events
  socket.onopen = function() {
    console.log('socket opened!');
    socket.send('willi go ...');
  };
  socket.onerror = function() {
    console.log('socket error!');
  };
  socket.onmessage = function(event) {
    // console.log('socket message!');
    // console.log(event.data);

    buildACity(JSON.parse(event.data));

  };
  // - - - - - - - - - -
}());
