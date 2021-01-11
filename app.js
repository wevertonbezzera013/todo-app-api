const express = require("express");
const app = express();

let usuarios = {
    nome: "weverton",
    email: "teste@exemplo.com"
}

app.get("/", function(req, res) {
    res.send(usuarios)
})

app.listen(3001, function(){
    console.log("Servidor rodando na url http://localhost:3001")
})