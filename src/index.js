const express=require('express');
const app=express();
const port=3000;
const routerApi=require('./routes/main.routes');

app.use(express.json());
app.listen(port,()=>{
    console.log(`Pokedex app listening in port ${port}`)
});

app.get('/',(req, res)=>{
    res.send('hello word')
})
//routerApi(app);