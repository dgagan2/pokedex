const express=require('express');
const usersRouters=express.Router();
const {getUser,createUser,editUser}=require('../../controllers/users/usersControllers');

usersRouters.get('/:id', getUser);
usersRouters.get('/', getUser);
usersRouters.post('/', createUser);
usersRouters.put('/:id', editUser);


module.exports=usersRouters;