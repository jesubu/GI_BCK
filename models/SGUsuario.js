'use strict'

var mongoose = require('mongoose');

var Schema=mongoose.Schema;

var SGUsuariosSchema=Schema({
    login:{type: String, unique:true,required:[true,'El Login es necesario.']},
    email:{type: String, unique:true, required:[true,'El email es necesario.']},
    nombre:{type: String, required:[true,'El nombre es necesario.']},
    apellidos:{type: String},
    password:{type: String, required:[true,'El nombre es necesario.']},
    img:{type: String},
    fechaCreacion:{ type: Date },
    fechaModificacion:{ type: Date },
    creadopor:{type:mongoose.Schema.Types.ObjectId,ref:'SGUsuarios'},
    modificadopor:{type:mongoose.Schema.Types.ObjectId,ref:'SGUsuarios'}
    
});

module.exports=mongoose.model('SGUsuarios',SGUsuariosSchema);