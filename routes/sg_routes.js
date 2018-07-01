'use strict'

var express=require('express');
var bcrypt = require('bcryptjs');
//var multipart=require('connect-multiparty');
var md_auth=require('../middlewares/authenticated');
var permit =require ('../middlewares/permission');

var api=express.Router();

//Declaración de controladores
var SGUsuarioController =require('../controllers/sgusuarioController');
var SGModuloController =require('../controllers/sgmoduloController');
var LoginController =require('../controllers/loginController');

//Rutas


//----------------
//**   LOGIN    **
//----------------
api.post('/login',LoginController.Login);

//parametro opciona->:nombre?
//----------------
//**  USUARIOS  **
//----------------
api.get('/usuario/:id',SGUsuarioController.getUsuario);
api.get('/usuarios',SGUsuarioController.getUsuarios);
api.put('/passusuario/:id',SGUsuarioController.updatePassUsuario);
//api.post('/modulo',ModuloController.saveModulo);
// api.put('/modulo/:id',ModuloController.updateModulo);
// api.delete('/modulo/:id',ModuloController.deleteModulo);


//----------------
//**  MODULOS   **
//----------------
api.get('/pruebasSeguridad',[md_auth.verificaToken,permit.isAdmin],SGModuloController.pruebas);
api.get('/modulo/:id',SGModuloController.getModulo);
api.get('/modulos',SGModuloController.getModulos);
api.post('/modulo',SGModuloController.saveModulo);
api.put('/modulo/:id',SGModuloController.updateModulo);

module.exports=api;