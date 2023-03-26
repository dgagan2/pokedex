const express=require('express');
const {getAlbums, getByUserId, getById, createAlbums}=require('../../controllers/albums/index');
const albumsRouter=express.Router();

albumsRouter.get('/',getAlbums);
albumsRouter.get('/:userId/', getByUserId)
albumsRouter.get('/id/:id', getById)
albumsRouter.post('/',createAlbums)
module.exports=albumsRouter;