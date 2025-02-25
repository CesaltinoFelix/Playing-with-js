const express = require("express")
const app = express()
const port = 3000

app.get("/post", (req, res)=>{
    pag = req.query['pag'];
    if(pag)
        res.send(`Mostrando as postagens da pagina ${pag}`);
    else
        res.send("Mostrando todas as postagens");
})


app.get("/post/:title", (req, res)=>{
    const title = req.params.title
    res.send(`<h3>Titulo da postagem:</h3> <h1>${title}</h1>`);
})



app.listen(port, (err)=>{
    if(err)
        console.error("Erro ao tentar rodar o servidor")
    else
        console.log(`Servidor rodando na porta ${port}`)
})