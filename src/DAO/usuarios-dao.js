module.exports = class UsuariosDao {

    constructor(bd) {
        this.bd = bd;
    }
    listaUser() {
        return new Promise((resolve, reject) => {
            this.bd.all("SELECT * FROM USUARIOS", (error, linhas) => {
                if (error) reject("Erro encontrado na tentativa de consultar usuários");
                else resolve("Consulta de usuários executada com sucesso!");
            })
        })
    }
    buscaUser(informa) {
        return new Promise((resolve, reject) => {
            this.bd.all("SELECT * FROM USUARIOS WHERE ID = ?", informa, (error, linhas) => {
                if (error) reject("Erro encontrado na tentativa de consultar o id do usuário");
                else resolve("Busca ao id executada com sucesso!");
            })
        })
    }
    atualizaUser(novo) {
        return new Promise((resolve, reject) => {
            this.bd.run("UPDATE USUARIOS SET NOME=?, EMAIL=?, SENHA=? WHERE ID= ?", novo, (error) => {
                if (error) reject("Erro encontrado na tentativa de consultar atualizar usuários");
                else resolve("Usuário atualizado com sucesso");
            })

        })
    }
    deletaUser(deleta) {
        return new Promise((resolve, reject) => {
            this.bd.all("DELETE FROM USUARIOS WHERE ID = ?", deleta, (error, linhas) => {
                if (error) reject("Erro encontrado na tentativa de consultar deletar usuários");
                else resolve("Usuário deletado com sucesso!");
            })
        })
    }
    enviaUser(envia) {
        return new Promise((resolve, reject) => {
            this.bd.all("INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?,?,?)", envia, (error, linhas) => {
                if (error) reject("Erro encontrado na tentativa de consultar enviar usuários");
                else resolve("Novo usuário incluso com sucesso!");
            })
        })
    }
}