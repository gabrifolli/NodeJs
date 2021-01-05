var http = require('http');
var fs = require('fs');

const PORT = 8080;

http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
      res.writeHead(200, {'content-Type': 'text/html'});
      res.write(data);
      return res.end();
  });
}).listen(`${PORT}`);

console.log(`Server is running on port: ${PORT}`);