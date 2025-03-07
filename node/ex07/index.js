const { render } = require("ejs")
const express = require("express")
const bodyParser = require("body-parser");
const conexao = require("./database/database");
const Pergunta = require("./database/models/Pergunta");
const Resposta = require("./database/models/Resposta");
const pergunta = require("./database/models/Pergunta");
const app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", (req, res)=>{
    Pergunta.findAll({raw: true, order: [['id', 'desc']]}).then((perguntas)=>{
        res.render("index", {perguntas})
    })
})

app.get("/adicionar-pergunta", (req, res)=>{
    res.render("adicionar_pergunta")
})

app.post("/adicionar-pergunta/create", (req, res)=>{
    const {titulo, descricao} = req.body
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then((resultado)=>{
        res.redirect("/")
    })
})

app.get("/pergunta/:id", (req, res)=>{
    const id = req.params.id
    Pergunta.findOne({
        where: {id : id}
    }).then((pergunta)=>{
        if(pergunta != undefined)
            Resposta.findAll({
                where:{
                    perguntaId: id
                },
                order: [['id', 'desc']]
            }).then((respostas)=>{
                res.render("pergunta", {pergunta, respostas})
            })
        else
            res.redirect("/")
    })
})

app.post("/resposta/create", (req, res)=>{
    const id = req.body.id
    const corpo = req.body.corpo
    Resposta.create({
        perguntaId: id,
        corpo: corpo
    }).then((resultado)=>{
        res.redirect(`/pergunta/${id}`)
    })
})
app.listen(3000, (error)=>{
    if(error)
        console.error("Erro ao iniciar o servidor")
    else
        console.log("Servidor iniciado com sucesso!")
})