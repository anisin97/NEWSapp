const express  = require('express');
const app = express();
const bodyParser= require('body-parser');
const morgan = require('morgan');
const request = require('request');
// var newsEver = require('./model/api_everything.js')
// var newsSrc = require('./model/api_sources.js')
// var newsHead = require('./model/api_headlines.js')

const PORT = process.env.PORT || 3000;
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('tiny'));

app.get('/', (req,res) => {
	res.render('index.ejs');
});

app.get('/req/:cat', (req,res) => {
	var url = "https://newsapi.org/v2/sources?category="+req.params.cat+"&apiKey=f59f72ac08824e4e921cd9c69f519ccf";
	request(url,function(err,response,body){
		if(!err && response.statusCode==200){
			console.log("Success");
			var newsArr = JSON.parse(body).sources;
			// console.log(news)
			res.render("newscat",{newsArr:newsArr})

		}
		else{
			console.log("Something is not right");
			res.status(404).send();    //404 - Resource or page not found error
		}
	})
	// res.render('index.ejs');
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
