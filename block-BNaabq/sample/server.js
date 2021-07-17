var express = require("express")

var app =express()

var logger = require("morgan")

var cookieParser  = require("cookie-parser")

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname+"/public"))

// third party middleware

app.use(logger("dev"))
app.use(cookieParser())

//All middlewares should be placed before route handling



//Fetch all cookies from request in next middleware.

app.use((req,res,next)=> {
    console.log(req.cookies)
})

//Custome middleware
app.use("/about",(req,res,next)=> {
    res.cookie("username" , "vivek")    // add cookie with key as username and value as your username.
    res.end("About Page")
    next()
})





app.get("/" , (req,res)=> {
    res.sendFile(__dirname + "/index.html")
})


app.listen(4000 , ()=> {
    console.log("server listen to 4000")
    
})