'use strict'

var mongoose = require('mongoose');

var Schema=mongoose.Schema;

var PruebasSchema=Schema({
    dato:{type: String, unique:true,required:[true,'El Login es necesario.']},
    
});

module.exports=mongoose.model('Prueba',PruebasSchema);