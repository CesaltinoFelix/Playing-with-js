const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res)=>{
    res.render("login")
})

app.get("/home", (req, res)=>{
    res.render("index")
})

app.listen(3000, (error)=>{
    if(error)
        console.error("Erro ao rodar o servidar")
    else
        console.log("Servidor rodando")
})