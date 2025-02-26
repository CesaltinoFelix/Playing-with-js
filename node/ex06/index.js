const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res)=>{
    res.render("login")
})

app.get("/home", (req, res)=>{
    const nome = req.query['nome']
    const email = req.query['email']
    res.render("index", {nome, email})
})

app.listen(3000, (error)=>{
    if(error)
        console.error("Erro ao rodar o servidar")
    else
        console.log("Servidor rodando")
})