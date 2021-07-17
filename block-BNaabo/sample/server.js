var express = require("express")

var app = express()

app.use((req,res,next)=> {
    console.log(req.method , req.url)
    next()
})

app.use(express.json())
app.use(express.urlencoded({extended:false})) 


app.post("/json", (req,res)=> {
    console.log(req.body)
})



app.listen(6000 , ()=> {
    console.log("server is listening to port 6000")
})