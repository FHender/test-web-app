var express = require('express');
var app = express();
var path = require('path');


app.listen(8080, () => console.log('Test app listening on port 8080!'))

app.use(express.static(__dirname + '/dist'));

app.get('/page', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.get('/egg', (req, res) => res.send('Big Ol Egg'))


