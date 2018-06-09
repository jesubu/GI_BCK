'use strict'

var express=require('express');

//var multipart=require('connect-multiparty');

var api=express.Router();

//Declaración de controladores
var SGUsuarioController =require('../controllers/sgusuarioController');


//Rutas

//parametro opciona->:nombre?
//api.get('/modulo/:id',ModuloController.getModulo);
api.get('/usuarios',SGUsuarioController.getUsuarios);
// api.post('/modulo',ModuloController.saveModulo);
// api.put('/modulo/:id',ModuloController.updateModulo);
// api.delete('/modulo/:id',ModuloController.deleteModulo);


module.exports=api;