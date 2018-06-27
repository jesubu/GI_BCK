'use strict'

var express=require('express');

//var multipart=require('connect-multiparty');

var api=express.Router();

//Declaración de controladores
var SGUsuarioController =require('../controllers/sgusuarioController');
var SGModuloController =require('../controllers/sgmoduloController');

//Rutas

//parametro opciona->:nombre?
//----------------
//**  USUARIOS  **
//----------------
api.get('/usuario/:id',SGUsuarioController.getUsuario);
api.get('/usuarios',SGUsuarioController.getUsuarios);
//api.post('/modulo',ModuloController.saveModulo);
// api.put('/modulo/:id',ModuloController.updateModulo);
// api.delete('/modulo/:id',ModuloController.deleteModulo);


//----------------
//**  MODULOS   **
//----------------
api.get('/modulo/:id',SGModuloController.getModulo);
api.get('/modulos',SGModuloController.getModulos);



module.exports=api;