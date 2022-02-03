const express = require("express")
const app = express()
const port = 800
app.set('views', "./views")
app.set("view engine", "ejs")

app.post("/", (req, res)=>{
    res.render("views/index.ejs")
})

app.listen(port, ()=>console.info("sto ascoltandando"))