const express = require("express")
const app = express()

app.listen(4000, (erro)=>{
    if(erro)
        console.log("Erro ao subir o servidor")
    else
        console.log("Servidor rodando com sucesso!")

})