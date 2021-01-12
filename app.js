const usuariosController = require('./controllers/usuarios-controller')
const tarefaController = require('./controllers/tarefa-controller')
const express = require("express");
const app = express();

let obj = {}



modificaObjeto(obj)
console.log(obj)

app.get("/", function(req, res) {
    res.send(usuarios)
})

app.listen(3001, function(){
    console.log("Servidor rodando na url http://localhost:3001")
})