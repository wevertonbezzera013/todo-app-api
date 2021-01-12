function modificaObjeto (objetoQualqueror){
    objetoQualqueror.nome = "Weverton"
    objetoQualqueror.curso = "webdev"
}

//const usuarios = new usuarios('Weverton', 20)

function modificaObjeto(objetoQualqueror)  {
    objetoQualqueror.get = ('path', (req, res) => {
        res.send(objetoQualqueror)
    })
    objetoQualqueror.curso = "webdev"
}