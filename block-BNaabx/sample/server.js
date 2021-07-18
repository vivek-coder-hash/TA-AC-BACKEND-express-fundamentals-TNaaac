var express = require("express")
var app = express()

var logger = require("morgan")




//route

app.get("/" , (req,res)=> {
    res.send("server working")
})

//listener
app.listen(3000 , ()=> {
    console.log("server listening to port 3000")
})