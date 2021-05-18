var express = require('express');
var app = express();
const path = require('path');
// var knex = require('knex');
// var cookieSession = require('cookie-session');
// var bodyParser = require('body-parser');
// var bcrypt = require('bcrypt');


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.use('/public', express.static(path.join(__dirname,'static')));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('login.ejs');
});

app.post("/register", function(req, res){
	var obj = req.body;
	console.log("hello");
	console.log(obj);
})

app.listen(3000, function () {
  console.log('Authentication app listening on port 3000!');
});