const albumsRouter=require('./albums/albumRoutes');
const mainController=require('../controllers/main/mainControllers');
const usersRouters=require('./users/usersRoutes')

const routerApi=(app)=>{
    app.use('/albums', albumsRouter);
    app.use('/users', usersRouters);
    app.use('/*', mainController)
}

module.exports=routerApi;