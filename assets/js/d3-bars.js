/* global console, d3, window, document */
/**
 * D3 Bars
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
     let config = {
           width:600,
           height:320,
           padding:20
         },
         bar = null,
         xRange = [0, config.width-(2*config.padding)],
         yRange = [config.height-(2*config.padding), 0],
         chart = d3.select('body')
                   .append('svg')
                     .attr('width', config.width)
                     .attr('height', config.height),
         xScale = d3.scaleOrdinal(),
         yScale = d3.scaleLinear().range(yRange),
         yAxis = d3.axisLeft().scale(yScale),
         xAxis = d3.axisBottom().scale(xScale);

     // methods

     // control/events
     d3.tsv('assets/data/data.tsv', function (error, data) {

       xScale.domain(data.map(function(d) { return d.name; }));
       yScale.domain([0, d3.max(data, function(d) { return d.value; })]);

       bar = chart.selectAll('g')
                  .data(data)
                    .enter()
                    .append('g')
                      .attr('transform', function (value, index) {
                        return 'translate(' + (index*(40+3)) + ',' + (config.height-value*5) + ')';
                      });

       bar.append('rect')
         .attr('height', function (value) { return value*5; })
         .attr('width', function (value) { return 40; });

       chart.append('g')
       .call(xAxis)
         .attr('class', 'axis')
         .attr('transform', 'translate(' + config.padding + ', ' + (config.height-config.padding) + ')');

       chart.append('g')
       .call(yAxis)
         .attr('class', 'axis')
         .attr('transform', 'translate(' + config.padding + ', ' + (config.padding) + ')');
     });
     // - - - - - - - - - -
 }());
