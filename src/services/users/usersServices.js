const bd=require('../../bd/db.json')

class userService {
    constructor() {
        this.bdUsers = bd.usuarios;
    }
    queryUserByID(id) {
        if (!id) {
            return this.bdUsers;
        } else {
            const validarDato = bd.usuarios.find(iduser => iduser.id == id);
            if (!validarDato) {
                res.status(404);
            } else {
                this.bdUsers = validarDato;
                return this.bdUsers
            }
        }
    }
    createUser(newUser) {
        const vacio = (dato) => {
            return Object.keys(dato).length
        }
        if (!vacio(newUser)) {
            res.status(404);
        } else {
            const validarDato = bd.usuarios.find(iduser => iduser.id == newUser.id);
            if (!validarDato) {
                this.bdUsers.push(newUser);
            } else {
                res.status(404);
            }
        }
    }
    editUser(id, bodyUser) {
        const vacio = (dato) => {
            return Object.keys(dato).length
        }
        if (!id || !vacio(bodyUser)) {
            res.status(404);
        } else {
            const validarDato = bd.usuarios.find(iduser => iduser.id == id);
            if (validarDato) {
                const index = Object.values(bd.usuarios).findIndex(userID => userID.id === parseInt(id));
                bd.usuarios[index] = bodyUser;
            } else {
                res.status(404);
            }
        }
    }
    editpartial(id, bodyUser) {
        const vacio = (dato) => {
            return Object.keys(dato).length
        }
        if (!id || !vacio(bodyUser)) {
            res.status(404);
        } else {
            const validarDato = bd.usuarios.find(iduser => iduser.id == id);
            if (validarDato) {
                const newArray = bd.usuarios.map(iduser => iduser.id == id ? {...iduser, ...bodyUser } : iduser);
            } else {
                res.status(404);
            }
        }
    }
    deleteUser(id) {
        const validarDato = this.bdUsers.find(iduser => iduser.id == id);
        if (validarDato) {
            const newbd = Object.values(this.bdUsers).filter(iduser => iduser.id != id);
            bd.usuarios = newbd
        } else {
            res.status(404)
        }
    }
}

module.exports=userService;