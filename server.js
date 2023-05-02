 const express = require("express")

 const app =  express()

 const parser= require("body-parser")

 const path = require("path")

 let d = __dirname


app.use(express.static(path.join(__dirname,"/public")))

 app.use(parser.urlencoded({extended:true}))


app.get("/",function (req, res) {


    res.sendFile(d+'index.html')

})




















 app.listen(7488,function (){
     console.log("Server running on 7488")
 })