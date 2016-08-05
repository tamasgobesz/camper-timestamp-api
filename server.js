var express = require('express');
var moment = require('moment');

var app = express();
var port = 8080;


app.get('/', function (req, res) {
  res.send('No date sent as parameter. </br> Usage ex. https://camper-timestamp-api-tamasgobesz.c9users.io/December%2015,%202015 or https://camper-timestamp-api-tamasgobesz.c9users.io/1450137600');
});

app.get('/:datestring', function (req, res) {
  var result = null;
  
  if (/^\d+$/.test(req.params.datestring)) {
    result = moment(req.params.datestring, 'X');
  } else {
    result = moment(req.params.datestring, 'MMMM D, YYYY');
  }
  
  if (result.isValid()) {
    res.json({
      unix: result.format('X'),
      natural: result.format('MMMM D, YYYY')
    });
  } else {
    res.json({
      unix: null,
      natural: null
    });
  }
  
});

app.listen(port, function () {
  console.log('Listening on port: ' + port);
});