'use strict';

var express = require('express');
var app = express()
var port = process.env.PORT || 3000;

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/app');
});
  app.use('/', express.static(__dirname + '/app'));


app.listen(port, function () {
  console.log('Example app listening on port 3000!');
})
