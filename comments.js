// Create web server
function skillsMember() {}

// Create web server and listen for requests
var server = http.createServer(function(req, res) {
  if (req.url === '/skills') {
    skillsMember();
  }
});

server.listen(3000);