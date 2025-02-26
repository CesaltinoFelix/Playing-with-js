const { render } = require("ejs")
const express = require("express")
const bodyParser = require("body-parser");
const sequelize = require("./database/database");
const app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", (req, res)=>{
    res.render("index")
})

app.get("/adicionar-pergunta", (req, res)=>{
    res.render("adicionar_pergunta")
})

app.post("/adicionar-pergunta/create", (req, res)=>{
    res.send("pergunta adicionada")
})

app.listen(3000, (error)=>{
    if(error)
        console.error("Erro ao iniciar o servidor")
    else
        console.log("Servidor iniciado com sucesso!")
})