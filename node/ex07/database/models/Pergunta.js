const {Sequelize} = require("sequelize")
const conexao = require("./../database")

const pergunta = conexao.define('perguntas', {
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

pergunta.sync({force: false}).then(()=>{})

module.exports = pergunta