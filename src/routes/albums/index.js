const express=require('express');
const {getAlbums, getByUserId, getById, createAlbums, deleteAlbums, editCompleteAlbums}=require('../../controllers/albums/index');
const albumsRouter=express.Router();

albumsRouter.get('/', getAlbums);
albumsRouter.get('/:userId/', getByUserId)
albumsRouter.get('/id/:id', getById)
albumsRouter.post('/', createAlbums)
albumsRouter.delete('/:userId/', deleteAlbums)
albumsRouter.patch('/id/:id', editCompleteAlbums)
module.exports=albumsRouter;