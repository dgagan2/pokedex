const bd=require('../../db.json');

class AlbumsServices{
    constructor(){
        this.Albums=bd.albums;
    }
    createAlbums(newAlbum){
        this.Albums.push(newAlbum)
    }
    queryAll(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.Albums); // try
                // reject catch
            }, 1000);
        });
    }

}
module.exports=AlbumsServices;

