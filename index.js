var express = require('express');
var app = express();

var port = process.env.port || 3000;

app.use(express.static(__dirname+'/public'));


app.get('/', (req,res)=>{
  res.render('./public/index.html')
})
app.listen(port, ()=>{
  console.log(`Server running at port:${port}`);
})
