const express = require("express")
const app = express()

app.get("/", (req, res)=>{
    res.end("<a href='/users'>usuarios</a><br>Pagina principal")
})

app.get("/users", (req, res)=>{
    res.send("<a href='/products'>products</a><br>Lista dos usuarios")    
})

app.get("/products", (req, res)=>{
    res.send("<a href='/'>home</a><br>Lista dos produtos")    
})

app.listen(3000, function(error){
    if(error)
        console.log("Erro ao tentar rodar o servidor")
    else
        console.log("Servidor Rodando")
})