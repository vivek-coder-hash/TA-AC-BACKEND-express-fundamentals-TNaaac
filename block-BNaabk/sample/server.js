var express = require("express")

var app = express()

app.get("/index" , (req,res)=> {
   res.send("welcome to send")
})


app.listen(4000 , ()=> {
    console.log("server listening to port 4000")
})