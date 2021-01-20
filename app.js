const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3001

app.use(bodyParser.json())

const usuario = require('./controllers/usuario-controller')
const tarefa = require('./controllers/tarefa-controller')

const db = require('./infra/bd')

usuario(app, db)
tarefa(app, db)

app.listen(port, () => {
    console.log(`Ouvindo em http://localhost:${port}`)
})