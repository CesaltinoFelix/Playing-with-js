const express = require("express")
const app = express()

app.get("/", (req, res)=>{
    res.end("<a href='/user/Cesaltino'>perfil do usuario</a><br>Pagina principal")
})

app.get("/user/:nome/:empresa?", (req, res)=>{
    let nome = req.params.nome
    let empresa = req.params.empresa
    if(empresa)
        res.send(`<a href='/'>voltar pra home</a><br>Seja bem-vindo, ${nome}`)    
    else
    res.send(`<a href='/'>voltar pra home</a><br>Seja bem-vindo, ${nome}, da empresa ${empresa}`)    

})


app.listen(3000, function(error){
    if(error)
        console.log("Erro ao tentar rodar o servidor")
    else
        console.log("Servidor Rodando")
})