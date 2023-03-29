require('express');

const callback=(req,res)=>{
    res.status(404)
    res.send("Ruta no encontrada")
}

module.exports=callback;