'use strict'

var mongoose = require('mongoose');

var Schema=mongoose.Schema;

var SGModuloSchema=Schema({
    codModulo:{type: String,required:[true,'El nombre es necesario.']},
    nombre:{type: String, required:[true,'El nombre es necesario.']},
    fechaCreacion:{ type: Date },
    fechaModificacion:{ type: Date },
    creadoPor:{type: mongoose.Schema.Types.ObjectId,ref:'SGUsuarios'}, 
    modificadoPor:{type:mongoose.Schema.Types.ObjectId,ref:'SGUsuarios'}
    
});
///OJO LAS REFERENCIAS A TABLAS NO DEBEN COINCIDIR, ES DECIR
// EN MONGODB ESTA: creadoPor pues en NodeJS debe ir CreadoPor o creadopor, etc, pero no igual.

module.exports=mongoose.model('SGModulos',SGModuloSchema);