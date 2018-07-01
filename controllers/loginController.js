'use strict'

var SGUsuario = require('../models/SGUsuario');
var bcrypt = require('bcryptjs');
//var jwt = require('jsonwebtoken');
var SEED = require('../config/config').SEED;
var jwt=require('../services/jwt.js');

function Login(req,res){
    var params=req.body;
//verificamos si existe usuario con ese mail
SGUsuario.findOne({email:params.email.toLowerCase()},(err,usuarioBD)=>{
    if (err){
        return     res.status(500).json({
            ok:false,
            message:'Error al buscar usuario.',
            body:params
        });
    }
    if (!usuarioBD){
        return     res.status(400).json({
            ok:false,
            message:'Credenciales incorrectas.',
            body:params
        });
    }
    if (!bcrypt.compareSync(params.password, usuarioBD.password)){
        return     res.status(400).json({
            ok:false,
            message:'Credenciales incorrectas.',
            body:params
        });
    }
    else{
        //comprobamos el token
        //console.log(params.getToken);
        if(params.getToken){
            //existe y devolvemos el jwt token           
            res.status(200).send({
                ok:true,
                message:'ok',
                token:jwt.createToken(usuarioBD)
            });
        }
        else{

            res.status(200).json({
                ok:true,
                message:'ok',
                usuario:usuarioBD
            });
        }
    }


    // //creamos un token!!
    // usuarioBD.password=';)'
    // var token=jwt.sign({usuario:usuarioBD},SEED,{expiresIn:14400}) //4horas.


    // res.status(200).json({
    //     ok:true,
    //     message:'ok',
    //     usuario:params,
    //     token:token,
    //     id:usuarioBD.id
    // });
});



}

module.exports={
    Login

}