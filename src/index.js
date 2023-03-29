require('dotenv').config();
const express=require('express');
const app=express();
const routerApi = require('./routes/main.routes');
app.use(express.json());
const port=process.env.PORT || 3000;


app.listen(port,()=>{
    console.log(`Pokedex app listening in port ${port}`);
});

app.get('/',(req, res)=>{
    res.send('hello word');
})
routerApi(app);