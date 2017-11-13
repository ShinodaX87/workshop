let http = require('http'),
    host = 'http://localhost',
    port = 3000,
    server = null,
    onCreateServer = null;

onCreateServer = function (request, response) {
  // http status (200 = ok; 404 = file not found)
  response.writeHead(200, {
    "Content-type" : "text/html",
    "Connection"   : "keep-alive"
  });
  // response body (payload)
  response.write('<h1>hallo Welt</h1>');
  response.write('<p>Lorem ipsum dolor sit amet consectetur.</p>');
  response.end('@eof');
};


server = http.createServer(onCreateServer);
server.listen(port);

console.log("a simple server runs on " + host + ":" + port);
