const express = require("express")
const app = express()
const port = 800
let jsonFile = require('jsonfile');
app.set('views', "./views")
app.set("view engine", "ejs")

app.get("/", (req, res)=>{
  res.render("index.ejs")
  
})
app.post("/index.ejs", (req, res)=>{

})
app.listen(port, ()=>console.info("sto ascoltandando"))