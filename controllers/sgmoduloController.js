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


function saveModulo(req,res){
    
    var modulo=new SGModulo();
    
    var params=req.body;

    modulo.codModulo=params.codModulo;
    modulo.nombre=params.nombre;
    modulo.fechaCreacion=params.fechaCreacion;
    modulo.fechaModificacion=null;
    modulo.creadoPor=params.creadoPor;
    modulo.modificadoPor=null;
    
    console.log(modulo);
    modulo.save((err,moduloStored)=>{
        if(err){
            console.log(err);
            res.status(500).send({message:'Error al guardar el marcador',errors:err});
        }
        else{
            res.status(201).send({modulo:moduloStored});
        }

    });    
}

module.exports={
    getModulos,
    getModulo,
    saveModulo

}
