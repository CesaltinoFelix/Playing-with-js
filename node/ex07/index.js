const { render } = require("ejs")
const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))


app.get("/", (req, res)=>{
    res.render("index")
})

app.get("/adicionar-pergunta", (req, res)=>{
    res.render("adicionar_pergunta")
})

app.listen(3000, (error)=>{
    if(error)
        console.error("Erro ao iniciar o servidor")
    else
        console.log("Servidor iniciado com sucesso!")
})