/* global console, d3, window, document */
/**
 * D3 Axes Types
 *
 * @package data visualisation
 * @author Michael [michael@zenbox.de]
 * @since 2017/08/09
 * @version v1.0.0
 * @copyright (c) 2017 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

// an ordinal scale axis
 (function() {
     'use strict';
     // - - - - - - - - - -
     // declaration
     let config = {
           width:600,
           height:120,
           padding:20
         },
         data = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
         range = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550],
         chart = d3.select('body')
                   .append('svg')
                     .attr('width', config.width)
                     .attr('height', config.height),
         scale = d3.scaleOrdinal().domain(data).range(range),
         axis = d3.axisBottom().scale(scale);

     // methods

     // control/events
     chart.append('g')
       .call(axis)
         .attr('class', 'axis')
         .attr('transform', 'translate(' + config.padding + ', ' + (config.height-30) + ')');

     // - - - - - - - - - -
 }());
 //   var scales = ["Linear", "Ordinal", "Point", "Band", "Log", "Pow"];
 // a linear scale axis
 (function() {
     'use strict';
     // - - - - - - - - - -
     // declaration
     let config = {
           width:600,
           height:320,
           padding:20
         },
         data = [0,1,2,3,4,5,6,7,8,9,10],
         xRange = [0, config.width-(2*config.padding)],
         yRange = [config.height-(2*config.padding), 0],
         chart = d3.select('body')
                   .append('svg')
                     .attr('width', config.width)
                     .attr('height', config.height),
         xScale = d3.scaleLinear().domain(d3.extent(data, function (value) { return value; })).range(xRange),
         yScale = d3.scaleLinear().domain(d3.extent(data, function (value) { return value; })).range(yRange),
         yAxis = d3.axisLeft().scale(yScale),
         xAxis = d3.axisBottom().scale(xScale);

     // methods

     // control/events
     chart.append('g')
     .call(xAxis)
       .attr('class', 'axis')
       .attr('transform', 'translate(' + config.padding + ', ' + (config.height-config.padding) + ')');

     chart.append('g')
     .call(yAxis)
       .attr('class', 'axis')
       .attr('transform', 'translate(' + config.padding + ', ' + (config.padding) + ')');

     // - - - - - - - - - -
 }());
