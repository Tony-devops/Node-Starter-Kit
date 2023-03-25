const express = require ('express');
const app = express();
const Port = 3001;

app.get('/', (req,res)=>{
   res.send(`Yay Tony, You are smashing it mate`);
});
app.listen(Port, ()=>{
    console.log(`Server is listening on port ${Port}. Ready... Steady... Gooo`)
});