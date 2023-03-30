const UserService=require('../../services/users/usersServices');
const userService=new UserService();
const express=require('express');
//const { create } = require('json-server');
const app=express();
app.use(express.json());
const getUser=(req,res)=>{
   try {
        const id=req.params.id;
        const users=userService.queryUserByID(id);
        res.status(202).json(users);
   } catch (error) {
        res.status(404).send("No se encontro el id");
   }
}
const createUser=(req,res)=>{
    try {
        const newUser=req.body;
        userService.createUser(newUser);
        res.status(202).send("Usuario creado");
    } catch (error) {
        res.status(404).send("No ingreso datos");
    }
}
const editUser=(req,res)=>{
    try {
        const id=req.params.id;
        const bodyUser=req.body;
        userService.editUser(id,bodyUser);
        res.status(202).send("Usuario actualizado")
    } catch (error) {
        res.status(404).send("No ingreso datos para actualizar")
    }
}
const editpartial = (req, res) => {
    try {
        const id=req.params.id;
        const bodyUser = req.body;
        userService.editpartial(id,bodyUser);
        res.status(202).send("Datos actualizados")
    } catch (error) {
        res.status(404).send("No ingreso datos para actualizar")
    }
}
const deleteUser = (req, res) => {
    try {
        const id = req.params.id;
        userService.deleteUser(id);
        res.status(202).send("Usuario eliminado")
    } catch (error) {
        res.status(404).send("Id no encontrado")
    }
}

module.exports={getUser,createUser,editUser,editpartial,deleteUser}