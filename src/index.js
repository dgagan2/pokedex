require('dotenv').config();
const express=require('express');
const app=express();
const routerApi=require('./routes/main.routes');
const port=process.env.PORT || 3000;
app.use(express.json());

app.listen(port,()=>{
    console.log(`Pokedex app listening in port ${port}`)
});

app.get('/',(req, res)=>{
    res.send('hello word')
})
routerApi(app);