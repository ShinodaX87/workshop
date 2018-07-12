/**
 * Axes with Dynamic Data
 * @author michael
 * @since 2018/07/12
 */

!(function () {
  'use strict'
  // - - - - - - - - - -
  // declaration
  let
    dataset = [
      [5, 20],
      [1300, 90],
      [250, 50],
      [100, 33],
      [330, 95]
    ],

    canvas = undefined,
    svg = undefined,
    scale = undefined,
    xScale = undefined,
    yScale = undefined,
    xAxis = undefined,
    yAxis = undefined,
    w = undefined,
    h = undefined,
    tx = undefined,
    ty = undefined,
    f = undefined,

    setCanvas = undefined,
    setXScale = undefined,
    setYScale = undefined,
    setXAxis = undefined,
    setYAxis = undefined;

  // head section
  canvas = {
    width: 800,
    height: 400,
    viewbox: {
      x: 0,
      y: 0,
      width: 400,
      height: 400
    },
    padding: {
      top: 20,
      right: 20,
      bottom: 30,
      left: 40
    }
  }
  scale = {
    xAxis: {
      domain: {
        from: 0,
        to: d3.max(dataset, function (d, i) {
          return d[0];
        })
      },
      range: {
        start: canvas.padding.left,
        end: canvas.width - canvas.padding.right
      }
    },
    yAxis: {
      domain: {
        from: 0,
        to: d3.max(dataset, function (d, i) {
          return d[1];
        })
      },
      range: {
        start: canvas.height - canvas.padding.bottom,
        end: canvas.padding.top
      }
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

  // process
  setCanvas('#diagram');

  xScale = d3.scaleLinear()
    .domain([scale.xAxis.domain.from, scale.xAxis.domain.to])
    .range([scale.xAxis.range.start, scale.xAxis.range.end]);

  yScale = d3.scaleLinear()
    .domain([scale.yAxis.domain.from, scale.yAxis.domain.to])
    .range([scale.yAxis.range.start, scale.yAxis.range.end]);

  xAxis = d3.axisBottom()
    .scale(xScale)
    .ticks(5);

  yAxis = d3.axisLeft()
    .scale(yScale)
    .ticks(5);

  svg.append('g')
    .attr('transform', 'translate(0, ' + (canvas.height - canvas.padding.bottom) + ')')
    .call(xAxis);

  svg.append('g')
    .attr('transform', 'translate(0, ' + (canvas.padding.left) + ')')
    .call(yAxis);

  // - - - - - - - - - -
}())