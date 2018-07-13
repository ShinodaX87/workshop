/**
 * Maps
 * @author Michael
 * @since 2018/07/13
 */
!(function () {
  'use strict';
  // - - - - - - - - - -
  // declaration
  let
    canvas = undefined,
    svg = undefined,
    projection = undefined,
    path = undefined,

    setCanvas = undefined,
    setProjection = undefined,
    setMap = undefined,
    setCities = undefined;

  // head section
  canvas = {
    width: 870,
    height: 700,
    viewbox: {
      x: 0,
      y: 0,
      width: 870,
      height: 700
    },
    padding: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20
    }
  };

  // methods
  setCanvas = function (contextSelector) {
    svg = d3.select(contextSelector)
      .append('svg')
      .attr('width', canvas.width)
      .attr('height', canvas.height)
      .attr('viewbox', canvas.viewbox.x + ' ' + canvas.viewbox.y + ' ' + canvas.viewbox.width + ' ' + canvas.viewbox.height)
  };

  setProjection = function (projectionType) {

    projection = d3[projectionType]()
      .translate([canvas.width / 2, canvas.height / 2])
      .scale(800); // Massstab!

    path = d3.geoPath()
      .projection(projection);
  };

  setMap = function (mapFile) {
    // reading data
    d3.json(mapFile)
      .then(function (geoJson) {

        // showing the map
        svg.selectAll()
          .data(geoJson.features)
          .enter()
          .append('path')
          .attr('d', path)
          .attr('data-name', function (d, i) {
            return d.properties.name;
          });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  setCities = function (citiesFile) {

    d3.csv(citiesFile)
      .then(function (dataset) {

        svg.selectAll()
          .data(dataset)
          .enter()
          .append('circle')
          .attr('cx', function (d, i) {
            return projection([d.lon, d.lat])[0];
          })
          .attr('cy', function (d, i) {
            return projection([d.lon, d.lat])[1];
          })
          .attr('r', function (d, i) {
            return Math.sqrt(d.population) * 0.004;
          })
      });
  }

  // control
  setCanvas('#diagram');
  setProjection('geoAlbersUsa');
  setMap('assets/data/us-states.geojson');

  setTimeout(function () {
    setCities('assets/data/us-cities.csv');
  }, 100);









  // - - - - - - - - - -
}());