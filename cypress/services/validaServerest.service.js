

export default class validaServerest {

    //Validações das ações que podemos realizar na API
    //validar a busca de usuários
    //validar o Cadastro novo de usuários
    //validar o login

    static validarBusacaDeUsuarios(resposta) {
        expect(resposta).to.be.a('object')
        expect(resposta.body.quantidade).to.be.a('number')
        expect(resposta.body.quantidade).to.be.greaterThan(3)
    }

    static validaLoginComSucesso(resposta) {
        expect(resposta).to.be.a('object')
        expect(resposta.body.message).to.be.a('string')
        expect(resposta.body).to.haveOwnProperty('authorization')
    }

}