var http = require("http")
const port = 3000

http.createServer((request, response)=>{
    response.end("<h1>Seja Bem-vindo!</h1>")
}).listen(port);
console.log(`Servidor rodando na porta ${port}`)