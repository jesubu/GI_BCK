'use strict'

var jwt = require('jsonwebtoken');
var moment=require('moment');
var SEED = require('../config/config').SEED;

exports.createToken=function(user){
    
    var payload={
        id:user._id,
        name:user.nombre,
        surname:user.apellidos,
        email:user.email,
        role:user.role,
        image:user.image,
        iat:moment().unix(),
        exp:moment().add(1,'days').unix()
    };
    
    var token= jwt.sign(payload,SEED);
    return token;
};