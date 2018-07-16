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
    .on('mouseenter', function (d, i) {
      console.log(d + ', ' + i);
      d3.select(this)
        .transition()
        .attr('data-value', d)
        .style('fill', 'lime');
    })
    .on('mouseleave', function (d, i) {
      console.log(d + ', ' + i);
      d3.select(this)
        .transition()
        .attr('data-value', null)
        .style('fill', 'lightcoral');
    })
    .attr('x', function (d, i) {
      return 20 + (i * (width - 40) / dataset.length);
    })
    .transition()
    .attr('y', 20)
    .attr('width', ((width - 40) / dataset.length))
    .attr('height', function (d, i) {
      return d;
    })
    .style('fill', 'lightcoral')
    .style('stroke', 'white');



  // updating
  d3.select('button')
    .on('click', function () {
      dataset = [Math.random() * 360, Math.random() * 360, Math.random() * 360];

      svg.selectAll('rect')
        .data(dataset)
        .transition()
        .attr('height', function (d, i) {
          return d;
        });
    })







  // - - - - - - - - - -
}());