'use strict'
// // comentar linea con ctrl+K+C
// var mongoose = require('mongoose');
// mongoose.Promise=global.Promise;
// mongoose.connect('mongodb://localhost:27017/HCNovaljarafe')   
//     .then(()=>{
//             console.log('Conexión BD ok.')
//     })
//     .catch(err=>{
//         console.log(err);
//     });

//Requires
var express = require('express');
var mongoose = require('mongoose');

//Iniciar variables
var app=express();

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/newdb')   
    .then(()=>{
            console.log('Conexión BD \x1b[32m%s\x1b[0m','ok')
    })
    .catch(err=>{
        console.log(err);
    });

//Rutas
app.get('/',(req,res,next)=>{
    res.status(200).json({
        ok:true,
        mensaje:'Petición realizada correctamente'
    });
});

//escuchamos peticiones
app.listen(3000,()=>{
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m' ,'online');
})