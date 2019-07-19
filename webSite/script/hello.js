'use strict';
var fs = require('fs'),
    http = require('http'),
    url = require('url'),
    path = require('path');

var root = path.resolve(process.argv[2]||'.');

var server = http.createServer(function(request, response){
    var pathName = url.parse(request.url).pathname;
    var filepath = path.join(root, pathName);
    var filepath = path.join(root, pathName);
    fs.stat(filepath, function(err, stats){
        if(!err && stats.isFile()){
            console.log('200' + request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        }else{
            console.log('404' + request.url);
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});

server.listen(8080);

console.log('server is running.');