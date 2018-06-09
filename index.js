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

// 'use strict'
// // // comentar linea con ctrl+K+C
// // var mongoose = require('mongoose');
// // mongoose.Promise=global.Promise;
// // mongoose.connect('mongodb://localhost:27017/HCNovaljarafe')   
// //     .then(()=>{
// //             console.log('Conexión BD ok.')
// //     })
// //     .catch(err=>{
// //         console.log(err);
// //     });

// //Requires
// var express = require('express');
// var mongoose = require('mongoose');

// //Iniciar variables
// var app = express();
// var appRoutes = require('./routes/app'); //definimos rutas
// var usuarioRoutes = require('./routes/usuario'); //definimos rutas


// mongoose.Promise=global.Promise;
// mongoose.connect('mongodb://localhost:27017/newdb')   
//     .then(()=>{
//             console.log('Conexión BD \x1b[32m%s\x1b[0m','ok')
//     })
//     .catch(err=>{
//         console.log(err);
//     });

// //Rutas
// app.use('/usuario',usuarioRoutes);
// app.use('/',appRoutes);
    

// //escuchamos peticiones
// app.listen(3000,()=>{
//     console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m' ,'online');
// })