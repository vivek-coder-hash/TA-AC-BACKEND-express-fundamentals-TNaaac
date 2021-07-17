var express = require("express")

var app = express()

var cookieparser = require("cookie-parser")

var logger  = require("morgan")

//middleware

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname+"/public"))
app.use(logger("dev"))

//routes

app.get("/" , (req,res)=> {
    res.sendFile(__dirname + "/index.html")
})

app.get("/new" , (req,res)=> {
    res.sendFile(__dirname + "/new.html")
})

app.post("/new" , (req,res)=> {
    console.log(req.body)
    res.json(req.body)
})

app.get("/users/:username" , (req,res)=> {
    res.send(req.params.username)
})

app.listen(5000,()=> {
    console.log("server listening to port 5000")
})