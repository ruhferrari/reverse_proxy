var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var serverPY = 'http://localhost:3001';
 
app.all("/*", function(req, res) {
    console.log('redirecting to ServerPY');
    apiProxy.web(req, res, {target: serverPY});
});

app.listen(3000);