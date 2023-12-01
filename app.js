var express = require('express');
var msg = require('./mode_teste');

var app = express();

app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.render("home/index")
});

app.get('/fomulario_incusao_noticias', function(req, res){
    res.render("admin/form_add_noticia")
});

app.get('/noticias', function(req, res){
    res.render("noticias/noticia")
});


app.listen(3000, function(){
    console.log(msg());
});