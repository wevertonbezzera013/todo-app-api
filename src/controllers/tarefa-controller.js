const Tarefa = require('../models/tarefa');

module.exports = (app, dados) => {
  app.get('/tarefa', (req, res) =>
  {
    res.send(dados.Tarefa);
  })

  app.post('/tarefa', (req, res) => {
    const novaTarefa = req.body;
    dados.tarefa.push(novaTarefa);
    res.send('<h1> Rota para a Tarefa</h1>');
  });
};