const AlbumsService=require('../../services/albums/index');
const albumsService=new AlbumsService();

const getAlbums = async (req, res) => {
    try {
      const albums = await albumsService.queryAll();
      res.status(200).json(albums);
    } catch(error) {
      res.status(404).json( { message: 'no hay albunes' } );
    }
};
const getByUserId=async (req,res)=>{
  try {
    const UserId=req.params.userId;
    const foundUserId=await albumsService.queryByUserId(UserId);
    res.status(200).json(foundUserId);
  } catch (error) {
    res.status(404).json({message:'No se encontro el usuario'});
  }
}
const getById=async (req,res)=>{
  try {
    const Id=req.params.id;
    const foundId=await albumsService.queryById(Id);
    res.status(200).json(foundId);
  } catch (error) {
    res.status(404).json({message:'No se encontro el usuario'});
  }
}
const createAlbums=(req,res)=>{
    try {
      const newAlbums=req.body;
      albumsService.createAlbums(newAlbums);
      res.status(201).send();
    } catch (error) {
      res.status(500).json( { message: 'error fatal' } );
    }
}
const deleteAlbums=(req,res)=>{
  try {
    const Id=req.params.userId;
    albumsService.deleteByUserId(Id);
    res.status(200).json({message:'Usuario eliminado'});
  } catch (error) {
    res.status(404).json({message:'No se puede eliminar el usuario'});
  }
}
const editCompleteAlbums=(req,res)=>{
  try {
    
  } catch (error) {
    
  }
}
const editPartitalAlbums=(req,res)=>{
  try {
    
  } catch (error) {
    
  }
}

module.exports={getAlbums, getByUserId, getById, createAlbums, deleteAlbums, editCompleteAlbums, editCompleteAlbums}
