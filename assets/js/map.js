/**
 * Maps
 * @author Michael
 * @since 2018/07/13
 */
!(function () {
  'use strict';
  // - - - - - - - - - -



  // reading data
  d3.json('assets/data/us-states.geojson')
    .then(function (geoJson) {
      console.log(geoJson);
    })
    .catch(function (err) {
      console.log(err);
    });
  // - - - - - - - - - -
}());