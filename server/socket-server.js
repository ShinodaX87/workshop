/*global console, require, setInterval */
(function() {
    /**
     * a simple socket based data service
     *
     * @package Application
     * @author Michael [michael@zenbox.de]
     * @since 2017/03/19
     * @version v1.0.0
     * @copyright (c) 2017 Michael Reichart, Cologne
     * @license MIT License [https://opensource.org/licenses/MIT]
     */
    'use strict';
    // - - - - - - - - - -
    const http = require('http');
    const httpServer = http.createServer();
    const socketServer = require('websocket').server;
    const port = 1337;
    const socket = new socketServer({
        httpServer: httpServer
    });

    // starting the webservice
    httpServer.listen(port);
    console.log('- - - - - - - - - - - - - - - - - - - - -');
    console.log('a http server runs on port ' + port + ',');
    console.log('press strg-c to stop it.');
    console.log('- - - - - - - - - - - - - - - - - - - - -');

    // socket eventlistener for initial request
    socket.on('request', function(request) {

        // build the connection
        let connection = request.accept(null, request.origin);

        // eventlistener for messages
        connection.on('message', function(message) {

            // show browser messages
            console.log(message.utf8Data);

            // send random data
            setInterval(function() {
                let data = {
                    rotate: Math.random() * 5 - Math.random() * 3,
                    translate : Math.random() * 10,
                    name : 'city' + Math.round(Math.random()*100),
                    latitude : 45 + Math.random(),
                    longitude : 7 + Math.random(),
                    population : 2000 + Math.random()*100000
                };
                connection.sendUTF(JSON.stringify(data));
            }, 1000);
        });
        connection.on('close', function() {
            console.log('connection closed!');
        });
    });
    // - - - - - - - - - -
}());
