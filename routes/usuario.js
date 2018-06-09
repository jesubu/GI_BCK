'use strict'

var express = require('express');
var app=express();
var Usuario=require('../models/SGUsuario');

//Rutas
app.get('/',(req,res,next)=>{
    Usuario.find({}) //,(err,usuarios)=>{
        .exec((err,usuarios)=>{
            //console.log(usuarios.Usuario);
        if(err){
            return res.status(200).json({
                ok:false,
                mensaje:'error cargando usuarios',
                errors:err
            });
        }
        res.status(200).json({
            ok:true,
            usuario:usuarios
        });        
    });

});

module.exports=app;