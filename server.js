var express = require("express");
var app = express();

app.get('/*',function(req,res) {
    res.send("Hello world From Server PY");
});

app.listen(3001);