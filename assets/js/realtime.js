/* global console, window, document */
/**
 * Realtime Data
 *
 * @package data visualisation
 * @author Michael [michael@zenbox.de]
 * @since 2017/08/11
 * @version v1.0.0
 * @copyright (c) 2017 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

(function() {
  'use strict';
  // - - - - - - - - - -

  // declaration
  let config = {
      width: 640,
      height: 480,
      dataLength : 10,
      padding : 4
    },
    colorList = ['red', 'green', 'yellow', 'orange', 'blue', 'grey', 'lime', 'pink', 'lightcoral', 'aquamarine'],
    svgWidth = config.width,
    svgHeight = config.height,
    bars = [],
    barWidth = (svgWidth / config.dataLength) - config.padding,
    barHeight = svgHeight/2,
    dataList = [],
    svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
    socket = new WebSocket('ws://localhost:1337');

  // methods
  function init() {
    svg.setAttribute('width', config.width);
    svg.setAttribute('height', config.height);

    document.querySelector('body').appendChild(svg);
    createBars();
  };

  function addToDataList (data, callback) {
    dataList.push(data);

    if (dataList.length > config.dataLength) {
      dataList.shift();
    }
    // console.clear();
    // console.log(dataList);

    callback();
  };

  function createBars () {
    for (let i=0;i<config.dataLength; i+=1) {
        bars[i]= document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        bars[i].setAttribute('width', barWidth);
        bars[i].setAttribute('height', barHeight);
        bars[i].setAttribute('x', (barWidth+config.padding)*i);
        bars[i].setAttribute('y', svgHeight-barHeight);
        svg.appendChild(bars[i]);
      };
  };

  function calcBarsHeight () {
    for (let i=0;i<dataList.length; i+=1) {
      bars[i].setAttribute('height', ((+dataList[i].translate*50)));
      bars[i].setAttribute('y', svgHeight - (dataList[i].translate*50));
      bars[i].setAttribute('fill', (colorList[parseInt(dataList[i].translate)]));
    }
  };

  // control/events
  socket.onopen = function() {
    console.log('socket opened!');
    socket.send('willi go ...');
  };
  socket.onerror = function() {
    console.log('socket error!');
  };
  socket.onmessage = function(event) {
    // console.log('socket message!');
    // console.log(event.data);

    addToDataList(JSON.parse(event.data), calcBarsHeight);

  };

  init();
  // - - - - - - - - - -
}());
