var express = require("express")
var app = express()
var logger = require("morgan")

//middleware
app.use(logger("dev"))

//custom middleware
app.use("/admin" , (req,res,next)=> {
    next("unauthorized to access")   // when next called ,it will skip all routes and middleware and will go to line number 31
})

//routes handling
app.get("/" , (req,res)=> {
    res.send("Welcome")
})


app.get("/about" , (req,res)=> {
    res.send("About page")
})

//define middleware for eeror handle 404

app.use((req,res,next)=> {
    res.send("Page not found")
})

// custom error handler

app.use((err,req,res,next)=> {
    
   res.status(500).send(err)
})



app.listen(3000, ()=> {
    console.log("server listening to port 3000")
})