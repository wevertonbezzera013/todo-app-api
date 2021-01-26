const express = require('express');
const Usuario = require('../models/usuario');
module.exports = (app, dados) => {
  app.get('/usuario', (req, res) =>
  {
    res.send(dados.usuario);
  })
  app.get('/usuario/:email', (req, res) => {
    let resposta = [];
    for (let i=0; i < dados.usuario.length; i++) {
      
      if (dados.usuario[i].email == req.params.email) {
        resposta.push(dados.usuario[i])
      }
    }
    res.send(resposta);
  })
  app.post('/usuario', (req, res) => {
    const novoUsuario = req.body;
    dados.usuario.push(novoUsuario);
    res.send('<h1>Rota para a Tarefa</h1>');
  })

  app.delete('/usuario/:email', (req, res) =>{

    let listaUsuario = [];

    for (let i=0; i < dados.usuario.length; i++) {
      if (req.params.email !== dados.usuario[i].email) {
        listaUsuario.push(dados.usuario[i]);
      }
    }
    if(dados.usuario.length != listaUsuario.length) {
      
      res.send(`Usuario ${req.params.email} foi removido!`)
    } else {
      res.send(`Usuario ${req.params.email}  não foi encontrado!`);
    }
    dados.usuario = listaUsuario;
    
  })

const atualizaRegistro = (email, body) => {
  for (let usr of dados.usuario) {
    if (usr.email === email) {
      usr.nome = body.nome;
      usr.senha = body.senha;
    }
  }
}

app.put('/usuario/:email', (req, res)=> {
  atualizaRegistro(req.params.email, req.body);
  res.send('Dados do usuario atualizados')
  }) 
}