const express = require("express")
const products = require("./data/products")
const app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/", (req, res)=>{
    res.render("login")
})

app.get("/home", (req, res)=>{
    
    const nome = req.query['nome']? req.query['nome'] : 'Desconhecido'
    const email = req.query['email']
    const password = req.query['password']
    var showProducts = false;
    if(password)
        showProducts = true
        
    res.render("index", {nome, email, showProducts, products})
})

app.listen(3000, (error)=>{
    if(error)
        console.error("Erro ao rodar o servidar")
    else
        console.log("Servidor rodando")
})