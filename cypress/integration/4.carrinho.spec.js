/// <reference types="cypress" />


import Serverest from '../services/serverest.service'
import ValidaServerest from '../services/validaServerest.service'


describe('Casos de teste sobre a rota /carrinho da API Serverest', () => {

    it('Deve colocar o produto no carrinho', () => {
        Serverest.colocarProdutoNoCarrinho().then(res => {
            ValidaServerest.validarProdutoNoCarrinho(res)
        })
    })
})