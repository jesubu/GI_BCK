'use strict'

var SGModulo=require('../models/SGModulo');

function getModulos(req,res){
    //orden descendente -columna.
    console.log('asdf');
    SGModulo.find({}).populate('creadoPor').sort('nombre').exec((err,modulos)=>{
        if (err){
            res.status(500).send({message:'Error al devolver los marcadores'});
        }
        else{
                if(!modulos){
                    res.status(404).send({message:'No hay marcadores'});

                }else{
                    res.status(200).send({modulos});
                }
            }
    }); 
}


function getModulo(req,res){
    var oId=req.params.id;
    SGModulo.findById(oId,function(err,modulo){
        if(err){
            res.status(500).send({message:'Error al devolver el marcador'});
        }else{
            if (!modulo){
                res.status(404).send({message:'No existe el marcador'});
            }
            else{
                res.status(200).send({status:200,modulo:modulo});
            }           
        }
    });
}

module.exports={
    getModulos,
    getModulo

}
