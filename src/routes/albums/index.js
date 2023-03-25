const express=require('express');
const {getAlbums}=require('../../controllers/albums/index');
const albumsRouter=express.Router();

albumsRouter.get('/',getAlbums);

module.exports=albumsRouter;