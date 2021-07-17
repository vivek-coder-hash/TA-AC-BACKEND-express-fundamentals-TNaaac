var express = require("express")
var app = express()


app.use((req,res,next)=> {
    
    
    next()
})

app.get("/" , (req,res)=> {
    res.send("welcome")
})

app.listen(5000, ()=> {
  console.log("listening on port 5000")
})