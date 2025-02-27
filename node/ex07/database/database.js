const {Sequelize} = require("sequelize");

const conexao = new Sequelize('perguntas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

conexao.authenticate().then(()=>{

  console.log('Connection has been established successfully.');
}).catch((error)=>{

  console.error('Unable to connect to the database:', error);
}) 


module.exports = conexao