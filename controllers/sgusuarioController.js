'use strict'

var SGUsuario=require('../models/SGUsuario');

function getUsuarios(req,res){
    //orden descendente -columna. .populate('creadoPor')
    SGUsuario.find({}).sort('nombre').populate('creadoPor').exec((err,usuarios)=>{
        if (err){
            res.status(500).send({message:'Error al devolver los marcadores: ' + err});
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


function getUsuario(req,res){
    var oId=req.params.id;
    SGUsuario.findById(oId,function(err,usuario){
        if(err){
            res.status(500).send({message:'Error al devolver el marcador'});
        }else{
            if (!usuario){
                res.status(404).send({message:'No existe el marcador'});
            }
            else{
                res.status(200).send({status:200,usuario:usuario});
            }           
        }
    });
}

module.exports={
    getUsuarios,
    getUsuario

}
