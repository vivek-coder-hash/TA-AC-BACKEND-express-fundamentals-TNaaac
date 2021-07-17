var express = require("express")

var app = express()

app.use("/users" , (req,res,next)=> {
    console.log(req.method , req.url)
    next()
})

app.get("/" , (req,res)=> {
    res.send("welcome")
})


app.listen(4000 , ()=> {
    console.log("server is listening to port 4000")
})