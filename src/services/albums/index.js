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
                resolve(this.Albums);
            }, 1000);
        });
    }
    queryByUserId(UserId){
        return new Promise((resolve,reject)=>{
            const foundUserId=Object.values(bd.albums).filter(user=>user.userId==UserId);
            resolve(foundUserId)
        },1000);
    }
    queryById(Id){
        return new Promise((resolve,reject)=>{
            const foundId=Object.values(bd.albums).filter(user=>user.id==Id);
            resolve(foundId);
        },1000)
    }

}
module.exports=AlbumsServices;

