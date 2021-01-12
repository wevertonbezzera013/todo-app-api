module.exports = (app) =>{
    app.get('/usuarios', (req, res) => {
        res.send('<h1>Usuarios</h1>')
    })
}