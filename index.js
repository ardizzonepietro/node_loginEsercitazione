const express = require("express")
const app = express()
const port = 8000
app.use(express.urlencoded({extended : false}))
let jsonFile = require('jsonfile');
var fs = require('fs');


//setViews
app.set('views', "./views")
app.set("view engine", "ejs")

app.get("/", (req, res)=>{
  res.render("index.ejs")
  
})


//post login
app.post("/index.ejs", (req, res)=>{
    mail = req.body.mail;   
    var fs = require('fs')
     
    var currentSearchResult = 'mail: '+mail;
    
    fs.readFile('data/utente.json', function (err, data) {
        var json = JSON.parse(data)
        json.push('search result: ' + currentSearchResult)
    
        fs.writeFile("results.json", JSON.stringify(json))
    })
   
})



//listen
app.listen(port, ()=>console.info("sto ascoltandando"))