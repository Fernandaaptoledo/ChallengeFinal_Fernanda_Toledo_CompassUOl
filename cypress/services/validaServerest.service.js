


export default class ValidaServerest {

    //Validações das ações que podemos realizar na API
    //validar a busca de usuários
    //validar o Cadastro novo de usuários
    //validar o login

    static validarBusacaDeUsuarios(resposta) {
        expect(resposta.body.quantidade).to.be.greaterThan(10)
    }

    static validarLoginComSucesso(resposta) {
        expect(resposta.body).to.haveOwnProperty('authorization')
    }

    static validarBuscaDeProdutos(resposta) {
        expect(resposta).to.be.a('object')
        expect(resposta.body.quantidade).to.be.a('number')
        expect(resposta.body.produtos[1]).to.haveOwnProperty('nome')
        expect(resposta.body.produtos[1]).to.haveOwnProperty('preco')
        expect(resposta.body.produtos[1]).to.haveOwnProperty('descricao')
    }

    static validarCadastroDeProdutoComSucesso(resposta) {
        //expect(resposta).to.be.a('object')
        //expect(resposta.body.message).to.be.a('string')
        //expect(resposta.body.message).to.be.eq('Cadastro realizado com sucesso')
        // expect(resposta.body).to.haveOwnProperty('_id')
    }
    
    static validarProdutoNoCarrinho(resposta){
        expect(resposta).to.be.a('object')
        expect(resposta.body.quantidade).to.be.a('number')
        //expect(resposta.body.carrinho[0]).to.haveOwnProperty('nome')
        //expect(resposta.body.carrinho[0]).to.haveOwnProperty('preco')
        //expect(resposta.body.carrinho[0]).to.haveOwnProperty('descricao')
    }
}