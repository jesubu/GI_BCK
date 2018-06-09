'use strict'

var SGUsuario=require('../models/SGUsuario');

function getUsuarios(req,res){
    //orden descendente -columna.
    SGUsuario.find({}).sort('nombre').exec((err,usuarios)=>{
        if (err){
            res.status(500).send({message:'Error al devolver los marcadores'});
        }
        else{
                if(!usuarios){
                    res.status(404).send({message:'No hay marcadores'});

                }else{
                    res.status(200).send({usuarios});
                }
            }
    }); 
}


module.exports={
    getUsuarios
}
