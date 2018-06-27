'use strict'

var mongoose=require('mongoose');
var app=require('./app.js');
var port=process.env.PORT || 3678;
mongoose.Promise=global.Promise;

mongoose.connect('mongodb://localhost:27017/newdb',(err,res)=>{
    if (err){
        console.log( err);
    }
    else{
        console.log('conexion a Mongo \x1b[32m%s\x1b[0m','OK');
        app.listen(port,function(){
            console.log('API REST funcionando en ...  http://localhost:\x1b[32m%s\x1b[0m',`${port}`);
        });
    }

});