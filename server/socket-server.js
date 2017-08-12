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

            // Rickelsbüller Koog: North 54.893481
            // Haldenwanger Eck:   South 47.270149
            // Isenbruch:          West 5.881043
            // Neißeaue:           East 15.010516

            let north=54.893481,
                south=47.270149,
                east=15.010516,
                west=5.881043;

            // send random data
            setInterval(function() {
                let data = {
                    rotate: Math.random() * 5 - Math.random() * 3,
                    translate : Math.random() * 10,
                    name : 'city' + Math.round(Math.random()*100),
                    latitude : south + Math.random()*(north-south),
                    longitude : west + Math.random()*(east-west),
                    population : 2000 + Math.round(Math.random()*1000000)
                };
                connection.sendUTF(JSON.stringify(data));
            }, 100);
        });
        connection.on('close', function() {
            console.log('connection closed!');
        });
    });
    // - - - - - - - - - -
}());
