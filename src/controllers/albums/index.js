const AlbumsService=require('../../services/albums/index');
const albumsService=new AlbumsService();

const getAlbums = async (req, res) => {
    try {
      // console.log(pokemonService.queryAll())
      const albums = await albumsService.queryAll();
      res.status(200).json(albums);
    } catch(error) {
      res.status(404).json( { message: 'no hay albunes' } );
    }
};

const createAlbums=(req,res)=>{
    try {
       const newAlbums=req.body;
        res.status(201).send();
    } catch (error) {
        res.status(500).json( { message: 'error fatal' } )
    }
}
const deleteAlbums=(req,res)=>{

}
const editCompleteAlbums=(req,res)=>{

}
const editPartitalAlbums=(req,res)=>{

}

module.exports={getAlbums, createAlbums, deleteAlbums, editCompleteAlbums, editCompleteAlbums}
