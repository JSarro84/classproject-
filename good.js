
var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(request, response) {
   server.listen(7000, function () {
   console.log('you are super cool!');
});
}

function handleRequest(request, response) {
   server.listen(7500, function () {
   console.log('nobody likes you!');
});
}






