const {Sequelize} = require("sequelize")
const conexao = require("./../database")


const resposta = conexao.define("respostas", {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    }, 
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

resposta.sync({force: false}).then(()=>{})

module.exports = resposta