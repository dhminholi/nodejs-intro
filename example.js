var http = require('http');
var fs = require('fs');
var porta = 8080;
var url = require('url');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  console.log(filename);
 if (filename == './') {filename = './index';}
 filename = filename + ".html";
	fs.readFile(filename, function(err, data) {
		if (err) {
		//	throw err;
		res.writeHead(404, {'Content-Type': 'text/html'});
		return res.end("File not found - 404");
		} 
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  console.log("...Incoming request:" + req.url)
  //res.write(err);
  res.end();
})
}).listen(porta);

console.log("Server listeing on Port " + porta);