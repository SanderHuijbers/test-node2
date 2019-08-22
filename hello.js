'use strict';
const express = require('express')
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n');});

    app.listen(PORT, HOST);
    console.log('Running on http://${HOST}:${PORT}');

/*
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);
*/