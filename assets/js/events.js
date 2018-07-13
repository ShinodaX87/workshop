/**
 * D3 events
 * @author Michael
 * @since 2018/07/13
 */

!(function () {
  // - - - - - - - - - -

  let
    svg,
    width = 400,
    height = 400,
    dataset = [30, 70, 90],
    xScale = d3.scaleLinear()
    .domain(0, dataset.length)
    .range(20, width - 20),
    yScale = d3.scaleLinear()
    .domain(0, d3.max(dataset))
    .range(20, height - 20);


  svg = d3.select('#diagram')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewbox', '0 0 ' + width + ' ' + height);

  svg.selectAll()
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
      return (i * (width - 40) / dataset.length);
    })
    .attr('y', 20)
    .attr('width', ((width - 40) / dataset.length))
    .attr('height', function (d, i) {
      console.log(d);
      return Math.random() * 360;
    })
    .style('fill', 'lightcoral')
    .style('stroke', 'white');
  // - - - - - - - - - -
}());