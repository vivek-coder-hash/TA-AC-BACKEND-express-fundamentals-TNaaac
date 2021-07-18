var express = require("express")
var app = express()
var logger = require("morgan")
var cookieParser = require("cookie-parser")

//inbuilt middlewares to capture data
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//third party middlewares
app.use(logger("dev"))
app.use(cookieParser())  // By applying this we have ability to access or create cookies in client's machine

//create custom middleware for cookies .we can create cookies with res object.

app.use((req,res,next)=> {
   res.cookie("username" , "xyz")  // cookie name of username xyz
   next("unauthorized")  // if we don't add next it will not pass request to next routes or middleware
})



//routes ,  to handle routes app.get  and to use middlewares use app.use
app.get("/" , (req,res)=> {
    res.send(`<h2>welcome to express </h2>`)
})


app.get("/about" , (req,res)=> {
    res.send(`<h2>My name is QWERTY</h2>`)
})


app.post("/form" , (req,res)=> {
    res.json(req.body)   //  send entire form data through response in json format
    //console.log(req.body)
})

app.post("/json" , (req,res)=> {
    res.json(req.body) 
})


app.get("/users/:username" , (req,res)=> {
    
    res.send(`<h2> ${req.params.username} </h2>`)
})


//Error handle 404  , only error handler middlewares placed after routes and other middlewares are placed before routes

app.use((req,res,next)=> {
    res.send("Page not found 404")
})


// custom error handle

app.use((err,req,res,next)=> {
    res.send(err)   // send complete error to client
})

app.listen(4000 , ()=> {
    console.log("server listening to port 4000")
})

