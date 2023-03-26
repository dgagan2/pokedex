const bd=require("./db.json")
const pokemones = [
    { id: 1, name: 'bulbasaur', type: 'grass', isActive: true },
    { id: 2, name: 'squirtle', type: 'water', isActive: true },
    { id: 3, name: 'charmander', type: 'fire', isActive: true },
];
console.log(Object.values(bd.albums).filter(user=>user.userId==3))