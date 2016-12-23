var express=require("express"),
	bodyParser=require("body-parser"),
	app=express(),
	init=require("./controllers/init/init.js"),
	env = process.env.PORT || 3000;



app.set('views', '/views'); // specify the views directory
app.set('view engine', 'jade'); // register the template engin
app.use(express.static(__dirname + '/assets'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(init);

app.listen(env,function(req,res){
	console.log("Servidor Creado");
});
