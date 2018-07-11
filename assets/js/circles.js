/**
 * Some Generated Circles ...
 * @author Michael
 * @since 2017/07/11
 */

!(function () {
  'use strict';
  // - - - - - - - - - -
  // declaration
  let
    svg = undefined,
    group = undefined,
    circle = undefined,
    dataset = [4, 8, 16, 32];

  // methods
  // control
  // building the svg root element
  svg = d3.select('#diagram')
    .append('svg')
    .attr('width', 400)
    .attr('height', 400)
    .attr('viewbox', '0 0 400 400')

  // building a group for all circles
  group = svg
    .append('g')
    .attr('transform', 'translate(50,50)');

  // // building a circle in a group
  // circle = group.append('circle')
  //   .attr('cx', 0)
  //   .attr('cy', 0)
  //   .attr('r', 100)
  //   .attr('transform', 'translate(0,0)');
  //
  // // building a second circle in a group
  // circle = group
  //   .append('circle')
  //   .attr('cx', 0)
  //   .attr('cy', 0)
  //   .attr('r', 100)
  //   .attr('transform', 'translate(230,230)');

  // building circles from dataset
  group.selectAll()
    .data(dataset)
    .enter()
    .append('circle')
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', function (d, i) {
      return d;
    })
    .attr('transform', function (d, i) {
      return 'translate(' + (d * 5) + ', 0)'
    })



  // - - - - - - - - - -
}())