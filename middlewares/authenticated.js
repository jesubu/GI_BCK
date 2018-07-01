'use strict'
var jwt = require('jsonwebtoken');
var SEED = require('../config/config').SEED;
var moment = require('moment');

exports.verificaToken=function(req,res,next){
    if(!req.headers.authorization){
        return res.status(403).send({message:'La petición requiere de Autenticacion.'});
    }
    else{
        var token=req.headers.authorization.replace(/['"]+/g,'');

        try{
            //console.log(payload);
            var payload=jwt.decode(token,SEED);
            //console.log(payload);
            if((payload.exp<=moment().unix())){
                return res.status(401).send({message:'El token ha expirado'});
            }
            req.user=payload;
            next();
        }
        catch(ex){
            return res.status(404).send({message:'El token no es válido'});
        }

        


    }


}