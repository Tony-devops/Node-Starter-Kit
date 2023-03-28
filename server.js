const express = require ('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req,res)=>{
   res.send(`Yay Tony, You are smashing it mate`);
});

app.get("/cyf", function (req, res) {
  res.send("CYF is :10O");
});

app.get("/tony", function (req, res) {
  res.send("Keep going. You can hack it:10O%");
});

app.get("/quote", function (req, res) {
  res.send("It is not about size of the dog in the fight but the fight in the dog that matters");
});

app.get("/iman", function (req, res) {
    // console.log(req);
    // console.log(req.query)
    // for (const key in req.query){
    //     console.log(key)
    // }
  let amount = req.query.amount;
    let test = req.query.test;
      let hello = req.query.hello;
//   console.log(searchQuery);
//   res.send("Hello World! You searched for " + searchQuery +': 3 beautiful things');
res.send(`${amount} ${test} ${hello}`)
});


app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}. Ready... Steady... Gooo`)
});