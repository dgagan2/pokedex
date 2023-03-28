const bd=require('../../db.json');

class AlbumsServices{
    constructor(){
        this.Albums=bd.albums;
    }
    createAlbums(newAlbum){
        this.Albums.push(newAlbum);
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
            resolve(foundUserId);
        },1000);
    }
    queryById(Id){
        return new Promise((resolve,reject)=>{
            const foundId=Object.values(bd.albums).filter(user=>user.id==Id);
        if(foundId.length>0){
            resolve(foundId);
        }else{
            reject(res.status(204))
        }
        },1000)
    }
    deleteByUserId(UserId) {
        const foundUserId = Object.values(bd.albums).filter(user => user.userId == UserId);
        if (foundUserId.length==0) {
            res.status(404);
        } else {
            const newAlbum = Object.values(this.Albums).filter(user => user.userId != UserId);
            this.Albums = newAlbum;
        }        
    }
    editPartialByUserID(Id, newData) {
        console.log("test 2")
        const foundId = Object.values(bd.albums).filter(user => user.id == Id);
        if (foundId.length == 0) {
            res.status(404);
            console.log("No paso")
        } else {
            console.log("test 3")
            const newArray = bd.albums.map(user => user.id === parseInt(Id) ? {...user,...newData}:user)
            console.log(newArray)
        }
    }
    editAllByUserId(Id,newAlbum){
        const foundId = Object.values(bd.albums).filter(user => user.id == Id);
        if (foundId.length == 0) {
            res.status(404);
        } else {
            const index = Object.values(bd.albums).findIndex(user => user.id === parseInt(Id));
            bd.albums[index] = newAlbum;
        }
    }

}
module.exports=AlbumsServices;

