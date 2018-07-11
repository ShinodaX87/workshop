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
    rectangle = undefined,
    dataset = [3520031, 1787408, 1450381, 1060582, 732688, 623738, 612178, 586181];

  // 1.	Berlin 3520031 Berlin
  // 2.	Hamburg	1787408	Hamburg
  // 3.	München	1450381	Bayern
  // 4.	Köln	1060582	Nordrhein-Westfalen
  // 5.	Frankfurt am Main	732688	Hessen
  // 6.	Stuttgart	623738	Baden-Württemberg
  // 7.	Düsseldorf	612178	Nordrhein-Westfalen
  // 8.	Dortmund	586181

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

  // building circles from dataset
  group.selectAll()
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', 25)
    .attr('height', function (d, i) {
      return d;
    })
    .attr('transform', function (d, i) {
      let
        sx = 1,
        sy = 0.00005,
        tx = (25 + 25) * i,
        ty = 200 - d * sy;

      return 'translate(' + tx + ', ' + ty + ') scale(' + sx + ', ' + sy + ')'
    })



  // - - - - - - - - - -
}())