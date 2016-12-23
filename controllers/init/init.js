var express=require("express"),
	app=module.exports=express();

app.set('views', __dirname + '/views');

app.get("/",function(req,res){
    res.render("init",{resultado:"Calculadora",err:false});
});

app.get("/:nombre",function(req,res){
	res.render("init",{resultado:req.params.nombre,err:false});
});

app.post("/operacion",function(req,res){
    try {    
        res.render("init",{resultado:"El resultado es: "+eval(req.body.num),err:false});
    }
    catch(er) {
        res.render("init",{resultado:"Revisa la informacion",err:true});
    }
	
});