const express = require("express")
const app = express()
const port = 8000
let jsonFile = require('jsonfile');
app.set('views', "./views")
app.set("view engine", "ejs")

app.get("/", (req, res)=>{
  res.render("index.ejs")
  
})
app.post("/index.ejs", (req, res)=>{
console.log("user: "+req.body.user+" pw: "+req.body.pw)

})
app.listen(port, ()=>console.info("sto ascoltandando"))