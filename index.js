var express = require('express')

var app = express();


var http = require('http')

http = http.Server(app)




app.get('/', function (req, res){

	res.send('hello ITP')
})


app.get('/about', function (req, res){

	res.send('aboutITP')
})





app.get('/contact', function (req, res){

	res.send('contact page')
})




var server = http.listen(3000,function(){
console.log('Im listening on port 3000')

})