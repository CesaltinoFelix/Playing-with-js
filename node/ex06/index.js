const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res)=>{
    res.render("login")
})

app.get("/home", (req, res)=>{

    const products = [
        {
            id: 1,
            name: 'Teclado Mecânico RGB',
            price: 15000,
            category: 'Periféricos',
            inStock: true
        },
        {
            id: 2,
            name: 'Mouse Gamer',
            price: 10000,
            category: 'Periféricos',
            inStock: false
        },
        {
            id: 3,
            name: 'Monitor 24" Full HD',
            price: 60000,
            category: 'Monitores',
            inStock: true
        },
        {
            id: 4,
            name: 'Cadeira Ergonômica',
            price: 75000,
            category: 'Móveis',
            inStock: true
        },
        {
            id: 5, 
            name: 'Headset Bluetooth',
            price: 20000,
            category: 'Áudio',
            inStock: false
        }
    ];
    
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