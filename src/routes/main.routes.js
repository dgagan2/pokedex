const albumsRouter=require('./albums/albumRoutes');
const mainController=require('../controllers/main/mainControllers')

const routerApi=(app)=>{
    app.use('/albums', albumsRouter);
    app.use('/*', mainController)
}

module.exports=routerApi;