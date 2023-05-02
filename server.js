 const express = require("express")

 const app =  express()



 const path = require("path")

 let d = __dirname


app.use(express.static(path.join(__dirname,"/public")))

 


app.get("/",function (req, res) {


    res.sendFile(d+'index.html')

})




















 app.listen(7488,function (){
     console.log("Server running on 7488")
 })
