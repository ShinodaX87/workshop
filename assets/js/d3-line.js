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
      width: 500,
      height: 400,
      padding: 30,
      barGap: 10
    },
    // element size
    svgWidth = config.width,
    svgHeight = config.height,

    // chart size
    chartWidth = svgWidth - config.padding * 2,
    chartHeight = config.height - config.padding * 2,
    toChartTop = config.padding,
    toChartLeft = config.padding,
    toChartBottom = svgHeight - config.padding,
    chart = d3.select('body').append('svg').attr('width', svgWidth).attr('height', svgHeight),

    // additional layers
    textLayer = null,

    // about the lines
    line = null,
    lines = null,

    // about the bars
    bar = null,
    barWidth = null,
    barMarginLeft = null,
    barMarginRight = null,

    // about the lines
    lineGenerator = null,
    points = null,
    pathData = null,

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
  d3.csv('assets/data/data.csv', function(error, data) {
    // * * * * * * * * * *
    barWidth = parseInt(chartWidth / data.length);
    barMarginLeft = config.barGap / 2;
    barMarginRight = config.barGap / 2;

    // * * * * * * * * * *
    // read from external data to configure x- and y-axis
    // * * * * * * * * * *
    xRange = [
      0, chartWidth
    ],
    xScale = d3.scaleBand().range(xRange),
    xScale.domain(data.map(function(d) {
      return d.name;
    }));
    xAxis = d3.axisBottom().scale(xScale);

    maxValue = d3.max(data, function(d) {
      return/* unary operator for number typing: */ + d.value;
    });
    yRange = [
      chartHeight, 0
    ],
    yScale = d3.scaleLinear().range(yRange);
    yScale.domain([0, maxValue]);
    yAxis = d3.axisLeft().scale(yScale);

    // * * * * * * * * * *
    // create and append bars
    // * * * * * * * * * *
    bar = chart.selectAll('g').data(data).enter().append('g').attr('transform', function(d, index) {
      return 'translate(' + (toChartLeft + (index * barWidth) + barMarginLeft) + ',' + (toChartTop + yScale(d.value)) + ') rotate(0) scale(1,1)';
    });

    bar.append('rect').attr('height', function(d) {
      return (chartHeight - yScale(d.value));
    }).attr('width', (barWidth - barMarginLeft - barMarginRight));

    bar.on('click', function(data) {
      //  console.log('bar clicked!');
      //  console.log(data.value);
      //  console.log(this);
      //  console.log(d3.mouse(this));

      d3.select(this).attr('class', 'active').append('text').text(data.value);
    });

    bar.on('mouseenter', function(data) {
      let coords = d3.mouse(this);

      d3.select('#textLayer').append('text').text(data.value).attr('class', 'active').attr('transform', 'translate(' + (coords[0] + 10) + ',' + (coords[1] - 10) + ')');

      d3.select(this).select('rect').classed('active', true);
    });

    bar.on('mousemove', function() {
      let coords = d3.mouse(this);

      d3.select('#textLayer').select('text').transition().duration(250).ease(d3.easeLinear).attr('transform', 'translate(' + (coords[0] + 10) + ',' + (coords[1] - 10) + ')');
    });

    bar.on('mouseleave', function() {
      d3.select('#textLayer').selectAll('text').remove();

      d3.select(this).select('rect').classed('active', false);

    });

    // * * * * * * * * * *
    // append line and dots
    // * * * * * * * * * *
    // create line data
    // as 2D-array:
    // [
    //   [x1, y1],
    //   [x2, y2],
    //   null,
    //   [xn, xn],
    // ];
    // * * * * * * * * * *
    lineGenerator = d3.line().defined(function(d) {
      return d !== null;
    }).curve(d3.curveMonotoneX);

    points = [];
    for (let i = 0; i < data.length; i += 1) {
      points[i] = [];
      points[i][0] = (toChartLeft + i * barWidth + barWidth / 2);
      points[i][1] = (toChartTop + yScale(+ data[i].value));
    }

    pathData = lineGenerator(points);

    chart.append("path").attr("d", pathData).attr("class", "line");

    chart.selectAll(".dot")
    .data(points).enter()
    .append("circle")
      .attr("class", "dot")
      .attr("cx", function(d) { return d[0]; })
      .attr("cy", function(d) { return d[1]; });

    // * * * * * * * * * *
    // append x axis
    // * * * * * * * * * *
    chart.append('g').call(xAxis).attr('class', 'axis').attr('transform', 'translate(' + toChartLeft + ', ' + toChartBottom + ')');

    // append y axis
    chart.append('g').call(yAxis).attr('class', 'axis').attr('transform', 'translate(' + toChartLeft + ', ' + toChartTop + ')');

    // append an additional grafical element
    chart.append('g').append('rect').attr('x', toChartLeft).attr('y', toChartTop).attr('width', chartWidth).attr('height', chartHeight).attr('class', 'graphical');

    // append an additional grafical element
    chart.append('g').attr('id', 'text-layer').attr('x', 0).attr('y', 0).attr('width', svgWidth).attr('height', svgHeight);
  });
  // - - - - - - - - - -
}());
