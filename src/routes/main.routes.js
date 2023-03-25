const albumsRouter=require('./albums/index');

const routerApi=(app)=>{
    app.use('/albums', albumsRouter);
}

module.exports=routerApi;