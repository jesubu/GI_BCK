'use strict'

var SGUsuario=require('../models/SGUsuario');
var bcrypt = require('bcryptjs');

//en el post encriptamos la pass enviada del usuario:
//var passEncrip=bcrypt.hashSync(valor,10); //la segunda variable es el salt que suele ser 10.

function getUsuarios(req,res){
    //orden descendente -columna. .populate('creadoPor')
    SGUsuario.find({},'nombre email').sort('nombre').populate('creadoPor').exec((err,usuarios)=>{
        if (err){
            res.status(500).send({message:'Error al devolver los marcadores: ',errors:err});
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
            res.status(500).send({message:'Error al devolver el marcador',errors:err});
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
