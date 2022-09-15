
const URL_USUARIOS = '/usuarios'
const URL_LOGIN = '/login'
const URL_PRODUTOS = '/produtos'
const URL_CARRINHOS = '/carrinhos'

export default class Serverest {

    //Ações que podemos realizar na API
    //Buscar usuários
    //Cadastrar novos usuários
    //Realizar login

    static buscarUsuarios() {
        return cy.rest('GET', URL_USUARIOS)
    }

    static buscarUsuariosParaLogin() {
        this.buscarUsuariosusuarios().then(res => {
            return {
                email: res.body.usuarios[0].email,
                senha: res.body.usuarios[0].password
            }
        })
    }

    static logar(usuario) {
        return cy.rest('POST', URL_LOGIN, usuario)
    }

}