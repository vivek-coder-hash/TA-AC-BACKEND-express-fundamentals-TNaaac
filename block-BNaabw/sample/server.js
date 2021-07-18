var express = require("express")
var app = express() // instantiate the app by mounting
var logger = require("morgan")
var cookieParser  = require("cookie-parser")

// built-in middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname+ "/public"))

//3rd part middlewares
app.use(logger("dev"))
app.use(cookieParser())

//custom middleware
app.use("/admin" , (req,res,next)=> {
    next("unauthorized to access")   // when next called ,it will skip all routes and middleware and will go to line number 33
                                       // next function without argument simply go from one middleware to another middleware
})

//route handling
app.get("/" , (req,res)=> {
    res.sendFile(__dirname+ "/index.html")
})

app.get("/users" , (req,res)=> {
    res.send("USERS")
})

app.get("/project" , (req,res)=> {
    res.sendFile(__dirname+"/project.html")
})



//Error handling middlewares

app.use((req,res,next)=> {
    res.send("page not found 404")
})

//custom error handle

app.use((err,req,res,next)=> {
    res.status(500).send(err)   
})


//listener
app.listen(5000, ()=> {
    console.log("server listening to port 5000")
})