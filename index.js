var express = require( 'express' );
var app = express(); 
var path = require('path');
var router = express.Router();

var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, '/node_modules')));
app.use(express.static(path.join(__dirname, '/jQueryFileUpload')));


app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
})