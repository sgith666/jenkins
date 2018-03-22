var express = require('express')
var app = express()
var path = require('path');
var fs = require('fs');
var morgan = require('morgan')
var bodyParser = require('body-parser');

app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, 'static')));
app.set('views', __dirname + '/static/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.post('/login',
	function (req, res) {
		if (req.body.uname =="admin" && req.body.psw == "password") {
			console.log("succeesful login user:" + req.body.uname + " " +req.body.psw + " from:"+req.connection.remoteAddress);	
		} else {
			console.log("failed login user:" + req.body.uname + " " +req.body.psw + " from:"+req.connection.remoteAddress);	
		}
		
		res.send('Hello World!');
	}
);

app.get('/',function (req, res) {
		res.render('index.html');
	}
)
app.listen(3000, () => console.log('Example app listening on port 3000!'));