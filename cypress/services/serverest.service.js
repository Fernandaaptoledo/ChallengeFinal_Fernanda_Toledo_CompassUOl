
const URL_USUARIOS  = '/usuarios'
const URL_LOGIN     = '/login'
const URL_PRODUTOS  = '/produtos'
const URL_CARRINHOS = '/carrinhos'

export default class Serverest {

    //Ações que podemos realizar na API
    //Buscar usuários
    //Cadastrar novos usuários
    //Realizar login

    static buscarUsuarios() {
        return cy.rest('GET', URL_USUARIOS)
    }

    static buscarUsuarioParaLogin() {
        cy.request(URL_USUARIOS).then(res => {
            cy.wrap({
                email: res.body.usuarios[0].email,
                password: res.body.usuarios[0].password
            }).as('usuarioLogin')
        })
    }

    static logar(usuario) {
        return cy.rest('POST', URL_LOGIN, usuario)
    }

    static salvarBearer(resposta) {
        Cypress.env('baerer', resposta.body.authorization.slice(7))
    }

    //Produtos//
    static buscarProdutos() {
        return cy.rest('GET', URL_PRODUTOS)
    }

    static cadastrarProdutoComSucesso() {
        return cy.request({
            method: 'POST',
            url: URL_PRODUTOS,
            body: {
                "nome": "C3 MT Horizontal",
                "preco": 350,
                "descricao": "Carro",
                "quantidade": 7
            },
            failOnStatusCode: true,
            auth: {
                bearer: Cypress.env("bearer")
            }
        })
    }

}