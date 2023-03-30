const express=require('express');
const usersRouters=express.Router();
const {getUser,createUser,editUser, editpartial,deleteUser}=require('../../controllers/users/usersControllers');

usersRouters.get('/:id', getUser);
usersRouters.get('/', getUser);
usersRouters.post('/', createUser);
usersRouters.put('/:id', editUser);
usersRouters.patch('/:id', editpartial)
usersRouters.delete('/:id', deleteUser);

module.exports=usersRouters;