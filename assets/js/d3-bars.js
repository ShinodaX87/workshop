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
           width:500,
           height:400,
           padding:25,
           barGap:10
         },
         // element size
         svgWidth = config.width,
         svgHeight = config.height,

         // chart size
         chartWidth = svgWidth-config.padding*2,
         chartHeight = config.height-config.padding*2,
         toChartTop = config.padding,
         toChartLeft = config.padding,
         toChartBottom = svgHeight-config.padding,
         chart= d3.select('body').append('svg').attr('width', svgWidth).attr('height', svgHeight),

         // about the bars
         bar = null,
         barWidth = null,
         barMarginLeft = null,
         barMarginRight = null,

         // ranges and scales
         xRange = null,
         xScale = null,
         xAxis = null,
         yRange = null,
         yScale = null,
         yAxis = null,
         maxValue = null;

     // methods

     // control/events
     d3.tsv('assets/data/data.tsv', function (error, data) {
       // * * * * * * * * * *
       barWidth = parseInt(chartWidth/data.length);
       barMarginLeft = config.barGap/2;
       barMarginRight = config.barGap/2;

       // * * * * * * * * * *
       // read from external data to configure x- and y-axis
       // * * * * * * * * * *
       xRange = [0, chartWidth],
       xScale = d3.scaleBand().range(xRange),
       xScale.domain(data.map(function(d) { return d.name; }));
       xAxis = d3.axisBottom().scale(xScale);

       maxValue = d3.max(data, function(d) { return d.value; });
       yRange = [chartHeight, 0],
       yScale = d3.scaleLinear().range(yRange),
       yScale.domain([0, maxValue]);
       yAxis = d3.axisLeft().scale(yScale),

       // * * * * * * * * * *
       // create and append bars
       // * * * * * * * * * *
       bar = chart.selectAll('g')
                  .data(data)
                    .enter()
                    .append('g')
                      .attr('transform', function (d, index) {
                        return 'translate(' + (toChartLeft + (index*barWidth) + barMarginLeft) + ',' + (toChartTop+yScale(d.value)) + ') rotate(0) scale(1,1)';
                      });

       bar.append('rect')
         .attr('height', function (d) { return (chartHeight-yScale(d.value)); })
         .attr('width', (barWidth-barMarginLeft-barMarginRight));

       // * * * * * * * * * *
       // append x axis
       // * * * * * * * * * *
       chart.append('g')
       .call(xAxis)
         .attr('class', 'axis')
         .attr('transform', 'translate(' + toChartLeft + ', ' + toChartBottom + ')');

      // append y axis
       chart.append('g')
       .call(yAxis)
         .attr('class', 'axis')
         .attr('transform', 'translate(' + toChartLeft + ', ' + toChartTop + ')');


         // append an additional grafical element
         chart.append('g')
            .append('rect')
            .attr('x',toChartLeft)
            .attr('y',toChartTop)
            .attr('width',chartWidth)
            .attr('height',chartHeight)
            .attr('class', 'graphical');
     });
   // - - - - - - - - - -
}());
